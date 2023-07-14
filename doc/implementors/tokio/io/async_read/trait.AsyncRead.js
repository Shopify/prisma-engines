(function() {var implementors = {
"hyper":[["impl <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"hyper/upgrade/struct.Upgraded.html\" title=\"struct hyper::upgrade::Upgraded\">Upgraded</a>"],["impl <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"hyper/server/conn/struct.AddrStream.html\" title=\"struct hyper::server::conn::AddrStream\">AddrStream</a>"]],
"postgres_native_tls":[["impl&lt;S&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"postgres_native_tls/struct.TlsStream.html\" title=\"struct postgres_native_tls::TlsStream\">TlsStream</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"]],
"tokio":[],
"tokio_io_timeout":[["impl&lt;R&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_io_timeout/struct.TimeoutReader.html\" title=\"struct tokio_io_timeout::TimeoutReader\">TimeoutReader</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a>,</span>"],["impl&lt;S&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_io_timeout/struct.TimeoutStream.html\" title=\"struct tokio_io_timeout::TimeoutStream\">TimeoutStream</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a>,</span>"],["impl&lt;W&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_io_timeout/struct.TimeoutWriter.html\" title=\"struct tokio_io_timeout::TimeoutWriter\">TimeoutWriter</a>&lt;W&gt;<span class=\"where fmt-newline\">where\n    W: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a>,</span>"]],
"tokio_native_tls":[["impl&lt;S&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_native_tls/struct.TlsStream.html\" title=\"struct tokio_native_tls::TlsStream\">TlsStream</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"]],
"tokio_postgres":[["impl <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_postgres/struct.Socket.html\" title=\"struct tokio_postgres::Socket\">Socket</a>"],["impl <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"tokio_postgres/tls/enum.NoTlsStream.html\" title=\"enum tokio_postgres::tls::NoTlsStream\">NoTlsStream</a>"]],
"tokio_rustls":[["impl&lt;T&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"tokio_rustls/enum.TlsStream.html\" title=\"enum tokio_rustls::TlsStream\">TlsStream</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"],["impl&lt;IO&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_rustls/server/struct.TlsStream.html\" title=\"struct tokio_rustls::server::TlsStream\">TlsStream</a>&lt;IO&gt;<span class=\"where fmt-newline\">where\n    IO: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"],["impl&lt;IO&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_rustls/client/struct.TlsStream.html\" title=\"struct tokio_rustls::client::TlsStream\">TlsStream</a>&lt;IO&gt;<span class=\"where fmt-newline\">where\n    IO: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"]],
"tokio_util":[["impl&lt;T&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_util/compat/struct.Compat.html\" title=\"struct tokio_util::compat::Compat\">Compat</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>,</span>"],["impl&lt;L, R&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"tokio_util/either/enum.Either.html\" title=\"enum tokio_util::either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a>,\n    R: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a>,</span>"],["impl&lt;S, B, E&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_util/io/struct.StreamReader.html\" title=\"struct tokio_util::io::StreamReader\">StreamReader</a>&lt;S, B&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.71.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;B, E&gt;&gt;,\n    B: <a class=\"trait\" href=\"bytes/buf/buf_impl/trait.Buf.html\" title=\"trait bytes::buf::buf_impl::Buf\">Buf</a>,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.71.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()