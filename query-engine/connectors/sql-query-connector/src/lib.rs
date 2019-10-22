//! # The SQL Connector interface
//!
//! The public interface to outside is split into separate traits:
//!
//! - [DatabaseReader](../query-connector/trait.DatabaseReader.html) to fetch data.
//! - [DatabaseWriter](../query-connector/trait.DatabaseWriter.html) to write
//!   data.

mod cursor_condition;
mod database;
mod error;
mod filter_conversion;
mod ordering;
mod query_builder;
mod raw_query;
mod row;
mod transactional;

use filter_conversion::*;
use raw_query::*;
use row::*;
use futures::future::{BoxFuture, FutureExt};
use std::{
    future::Future,
    pin::Pin,
    task::{Poll, Context},
};

pub use database::*;
pub use error::SqlError;
pub use transactional::*;

type Result<T> = std::result::Result<T, error::SqlError>;

pub struct SQLIO<'a, T>(BoxFuture<'a, crate::Result<T>>);

impl<'a, T> SQLIO<'a, T>
{
    pub fn new<F>(inner: F) -> Self
    where
        F: Future<Output = crate::Result<T>> + Send + 'a,
    {
        Self(inner.boxed())
    }
}

impl<'a, T> Future for SQLIO<'a, T>
{
    type Output = crate::Result<T>;

    fn poll(mut self: Pin<&mut Self>, ctx: &mut Context<'_>) -> Poll<Self::Output> {
        self.0.as_mut().poll(ctx)
    }
}
