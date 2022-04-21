use metrics::KeyName;
use metrics::{Counter, CounterFn, Gauge, GaugeFn, Histogram, HistogramFn, Key, Recorder, Unit};
use metrics_util::registry::{GenerationalAtomicStorage, GenerationalStorage, Registry};
use parking_lot::RwLock;
use std::collections::HashMap;
use std::sync::atomic::Ordering;
use std::sync::Arc;

use tracing::{
    field::{Field, Visit},
    Subscriber,
};
use tracing_subscriber::Layer;

const METRIC_TARGET: &str = "qe_metrics";
const METRIC_COUNTER: &str = "counter";
const METRIC_GAUGE: &str = "gauge";
const METRIC_HISTOGRAM: &str = "histogram";
const METRIC_DESCRIPTION: &str = "description";

struct Inner {
    descriptions: RwLock<HashMap<String, String>>,
    register: Registry<Key, GenerationalAtomicStorage>,
}

impl Inner {
    fn new() -> Self {
        Self {
            descriptions: RwLock::new(HashMap::new()),
            register: Registry::new(GenerationalStorage::atomic()),
        }
    }
}

#[derive(Clone)]
struct MetricRegistry {
    inner: Arc<Inner>,
}

impl MetricRegistry {
    pub fn new() -> Self {
        MetricRegistry {
            inner: Arc::new(Inner::new()),
        }
    }

    pub fn record(&self, metric: &MetricVisitor) {
        match metric.metric_type {
            MetricType::Counter => self.handle_counter(metric),
            MetricType::Gauge => self.handle_gauge(metric),
            MetricType::Histogram => self.handle_histogram(metric),
            MetricType::Description => self.handle_description(metric),
        }
    }

    fn handle_description(&self, metric: &MetricVisitor) {
        if let MetricAction::Description(description) = &metric.action {
            let mut descriptions = self.inner.descriptions.write();
            //TODO: Sanitize string
            descriptions
                .entry(metric.name.name().to_string())
                .or_insert(description.to_string());
        }
    }

    fn handle_counter(&self, metric: &MetricVisitor) {
        self.inner
            .register
            .get_or_create_counter(&metric.name, |c| match metric.action {
                MetricAction::Increment(val) => CounterFn::increment(c, val),
                MetricAction::Absolute(val) => CounterFn::absolute(c, val),
                _ => (),
            });
    }

    fn handle_gauge(&self, metric: &MetricVisitor) {
        self.inner
            .register
            .get_or_create_gauge(&metric.name, |c| match metric.action {
                MetricAction::GaugeInc(val) => GaugeFn::increment(c, val as f64),
                MetricAction::GaugeSet(val) => GaugeFn::set(c, val as f64),
                MetricAction::GaugeDec(val) => GaugeFn::decrement(c, val as f64),
                _ => (),
            });
    }

    pub fn handle_histogram(&self, metric: &MetricVisitor) {
        self.inner
            .register
            .get_or_create_histogram(&metric.name, |c| match metric.action {
                MetricAction::HistRecord(val) => HistogramFn::record(c, val as f64),
                _ => (),
            });
    }

    pub fn counter_value(&self, name: &'static str) -> Option<u64> {
        let key = Key::from_name(name);
        let counters = self.inner.register.get_counter_handles();
        let counter = counters.get(&key)?;
        Some(counter.get_inner().load(Ordering::Acquire))
    }

    pub fn gauge_value(&self, name: &'static str) -> Option<f64> {
        let key = Key::from_name(name);
        let gauges = self.inner.register.get_gauge_handles();
        let gauge = gauges.get(&key)?;
        let val = f64::from_bits(gauge.get_inner().load(Ordering::Acquire));
        Some(val)
    }

    pub fn get_descriptions(&self) -> HashMap<String, String> {
        let descriptions = self.inner.descriptions.read();
        descriptions.clone()
    }
}

#[derive(Debug)]
enum MetricType {
    Counter,
    Gauge,
    Histogram,
    Description,
}

#[derive(Debug)]
enum MetricAction {
    Increment(u64),
    Absolute(u64),
    GaugeSet(f64),
    GaugeInc(f64),
    GaugeDec(f64),
    HistRecord(f64),
    Description(String),
}

#[derive(Debug)]
struct MetricVisitor {
    metric_type: MetricType,
    action: MetricAction,
    name: Key,
}

impl MetricVisitor {
    pub fn new() -> Self {
        Self {
            metric_type: MetricType::Description,
            action: MetricAction::Absolute(0),
            name: Key::from_name(""),
        }
    }
}

impl Visit for MetricVisitor {
    fn record_debug(&mut self, _field: &Field, _value: &dyn std::fmt::Debug) {}

    fn record_f64(&mut self, field: &Field, value: f64) {
        match field.name() {
            "gauge_inc" => self.action = MetricAction::GaugeInc(value),
            "gauge_dec" => self.action = MetricAction::GaugeDec(value),
            "gauge_set" => self.action = MetricAction::GaugeSet(value),
            "hist_record" => self.action = MetricAction::HistRecord(value),
            _ => (),
        }
    }

    fn record_i64(&mut self, field: &Field, value: i64) {
        println!("record i64 {} {}", field, value);
        match field.name() {
            "increment" => self.action = MetricAction::Increment(value as u64),
            "absolute" => self.action = MetricAction::Absolute(value as u64),
            _ => (),
        }
    }

    fn record_u64(&mut self, field: &Field, value: u64) {
        match field.name() {
            "increment" => self.action = MetricAction::Increment(value),
            "absolute" => self.action = MetricAction::Absolute(value),
            _ => (),
        }
    }

    fn record_str(&mut self, field: &Field, value: &str) {
        println!("name {}", field.name());
        match (field.name(), value) {
            ("metric_type", METRIC_COUNTER) => self.metric_type = MetricType::Counter,
            ("metric_type", METRIC_GAUGE) => self.metric_type = MetricType::Gauge,
            ("metric_type", METRIC_HISTOGRAM) => self.metric_type = MetricType::Histogram,
            ("metric_type", METRIC_DESCRIPTION) => self.metric_type = MetricType::Description,
            ("name", _) => self.name = Key::from_name(value.to_string()),
            (METRIC_DESCRIPTION, _) => self.action = MetricAction::Description(value.to_string()),
            _ => (),
        }
    }
}

// A tracing layer for receiving metric trace events and storing them in the registry.
impl<S: Subscriber> Layer<S> for MetricRegistry {
    fn on_event(&self, event: &tracing::Event<'_>, _ctx: tracing_subscriber::layer::Context<'_, S>) {
        println!("event {:?}", event);

        if event.metadata().target() != METRIC_TARGET {
            return;
        }

        let mut visitor = MetricVisitor::new();
        event.record(&mut visitor);
        self.record(&visitor);
    }
}

struct MetricHandle(Key);

impl CounterFn for MetricHandle {
    fn increment(&self, value: u64) {
        trace!(
            target: METRIC_TARGET,
            name = self.0.name(),
            metric_type = METRIC_COUNTER,
            increment = value,
        );
    }

    fn absolute(&self, value: u64) {
        trace!(
            target: METRIC_TARGET,
            name = self.0.name(),
            metric_type = METRIC_COUNTER,
            absolute = value,
        );
    }
}

impl GaugeFn for MetricHandle {
    fn increment(&self, value: f64) {
        trace!(
            target: METRIC_TARGET,
            name = self.0.name(),
            metric_type = METRIC_GAUGE,
            gauge_inc = value,
        );
    }

    fn decrement(&self, value: f64) {
        trace!(
            target: METRIC_TARGET,
            name = self.0.name(),
            metric_type = METRIC_GAUGE,
            gauge_dec = value,
        );
    }

    fn set(&self, value: f64) {
        trace!(
            target: METRIC_TARGET,
            name = self.0.name(),
            metric_type = METRIC_GAUGE,
            gauge_set = value,
        );
    }
}

impl HistogramFn for MetricHandle {
    fn record(&self, value: f64) {
        trace!(
            target: METRIC_TARGET,
            name = self.0.name(),
            metric_type = METRIC_HISTOGRAM,
            hist_record = value,
        );
    }
}

#[derive(Default)]
struct MetricRecorder;

impl MetricRecorder {
    fn register_description(&self, name: &str, description: &str) {
        trace!(
            target: METRIC_TARGET,
            name = name,
            metric_type = METRIC_DESCRIPTION,
            description = description
        );
    }
}

impl Recorder for MetricRecorder {
    fn describe_counter(&self, key_name: KeyName, _unit: Option<Unit>, description: &'static str) {
        self.register_description(key_name.as_str(), description);
    }

    fn describe_gauge(&self, key_name: KeyName, unit: Option<Unit>, description: &'static str) {
        self.register_description(key_name.as_str(), description);
    }

    fn describe_histogram(&self, key_name: KeyName, unit: Option<Unit>, description: &'static str) {
        self.register_description(key_name.as_str(), description);
    }

    fn register_counter(&self, key: &Key) -> Counter {
        Counter::from_arc(Arc::new(MetricHandle(key.clone())))
    }

    fn register_gauge(&self, key: &Key) -> Gauge {
        Gauge::from_arc(Arc::new(MetricHandle(key.clone())))
    }

    fn register_histogram(&self, key: &Key) -> Histogram {
        Histogram::from_arc(Arc::new(MetricHandle(key.clone())))
    }
}

pub fn set_recorder() {
    let recorder = MetricRecorder::default();
    metrics::set_boxed_recorder(Box::new(recorder)).unwrap();
}

#[cfg(test)]
mod tests {
    use super::*;
    use metrics::{
        absolute_counter, decrement_gauge, describe_counter, gauge, increment_counter, increment_gauge,
        register_counter, register_gauge,
    };
    use tracing::instrument::WithSubscriber;
    use tracing::Dispatch;
    use tracing_subscriber::layer::SubscriberExt;

    use once_cell::sync::Lazy;
    use tokio::runtime::Runtime;

    static RT: Lazy<Runtime> = Lazy::new(|| {
        set_recorder();
        Runtime::new().unwrap()
    });

    #[test]
    fn test_counters() {
        RT.block_on(async {
            let metrics = MetricRegistry::new();
            let dispatch = Dispatch::new(tracing_subscriber::Registry::default().with(metrics.clone()));
            async {
                // describe_counter!("bytes_sent", Unit::Bytes, "total number of bytes sent");
                let counter1 = register_counter!("test_counter");
                counter1.increment(1);
                increment_counter!("test_counter");
                increment_counter!("test_counter");

                increment_counter!("another_counter");

                let val = metrics.counter_value("test_counter").unwrap();
                assert_eq!(val, 3);

                let val2 = metrics.counter_value("another_counter").unwrap();
                assert_eq!(val2, 1);

                absolute_counter!("test_counter", 5);
                let val3 = metrics.counter_value("test_counter").unwrap();
                assert_eq!(val3, 5);
            }
            .with_subscriber(dispatch)
            .await;
        });
    }

    #[test]
    fn test_gauges() {
        RT.block_on(async {
            let metrics = MetricRegistry::new();
            let dispatch = Dispatch::new(tracing_subscriber::Registry::default().with(metrics.clone()));
            async {
                let gauge1 = register_gauge!("test_gauge");
                gauge1.increment(1.0);
                increment_gauge!("test_gauge", 1.0);
                increment_gauge!("test_gauge", 1.0);
                increment_gauge!("another_gauge", 1.0);

                let val = metrics.gauge_value("test_gauge").unwrap();
                assert_eq!(val, 3.0);

                let val2 = metrics.gauge_value("another_gauge").unwrap();
                assert_eq!(val2, 1.0);

                assert_eq!(None, metrics.counter_value("test_gauge"));

                gauge!("test_gauge", 5.0);
                let val3 = metrics.gauge_value("test_gauge").unwrap();
                assert_eq!(val3, 5.0);

                decrement_gauge!("test_gauge", 2.0);
                let val4 = metrics.gauge_value("test_gauge").unwrap();
                assert_eq!(val4, 3.0);
            }
            .with_subscriber(dispatch)
            .await;
        });
    }

    #[test]
    fn test_no_panic_and_ignore_other_traces() {
        RT.block_on(async {
            let metrics = MetricRegistry::new();
            let dispatch = Dispatch::new(tracing_subscriber::Registry::default().with(metrics.clone()));
            async {
                trace!("a fake trace");

                increment_gauge!("test_gauge", 1.0);
                increment_counter!("test_counter");

                trace!("another fake trace");

                assert_eq!(1.0, metrics.gauge_value("test_gauge").unwrap());
                assert_eq!(1, metrics.counter_value("test_counter").unwrap());
            }
            .with_subscriber(dispatch)
            .await;
        });
    }

    #[test]
    fn test_set_and_read_descriptions() {
        RT.block_on(async {
            let metrics = MetricRegistry::new();
            let dispatch = Dispatch::new(tracing_subscriber::Registry::default().with(metrics.clone()));
            async {
                describe_counter!("test_counter", "This is a counter");

                let descriptions = metrics.get_descriptions();
                println!("d {:?}", descriptions);
                let description = descriptions.get("test_counter").unwrap();

                assert_eq!("This is a counter", description);
            }
            .with_subscriber(dispatch)
            .await;
        });
    }
}
