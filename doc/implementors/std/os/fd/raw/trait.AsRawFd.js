(function() {var implementors = {
"hyper":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"hyper/server/conn/struct.AddrStream.html\" title=\"struct hyper::server::conn::AddrStream\">AddrStream</a>"]],
"mio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"mio/net/struct.UdpSocket.html\" title=\"struct mio::net::UdpSocket\">UdpSocket</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"mio/net/struct.UnixListener.html\" title=\"struct mio::net::UnixListener\">UnixListener</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"mio/struct.Registry.html\" title=\"struct mio::Registry\">Registry</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"mio/net/struct.UnixDatagram.html\" title=\"struct mio::net::UnixDatagram\">UnixDatagram</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"mio/net/struct.TcpListener.html\" title=\"struct mio::net::TcpListener\">TcpListener</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"mio/unix/pipe/struct.Sender.html\" title=\"struct mio::unix::pipe::Sender\">Sender</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"mio/struct.Poll.html\" title=\"struct mio::Poll\">Poll</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>"]],
"rustix":[["impl&lt;'context, T: <a class=\"trait\" href=\"rustix/fd/trait.AsFd.html\" title=\"trait rustix::fd::AsFd\">AsFd</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"rustix/fd/struct.OwnedFd.html\" title=\"struct rustix::fd::OwnedFd\">OwnedFd</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"rustix/fd/struct.OwnedFd.html\" title=\"struct rustix::fd::OwnedFd\">OwnedFd</a>&gt;&gt; <a class=\"trait\" href=\"rustix/fd/trait.AsRawFd.html\" title=\"trait rustix::fd::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"rustix/io/epoll/struct.Epoll.html\" title=\"struct rustix::io::epoll::Epoll\">Epoll</a>&lt;<a class=\"struct\" href=\"rustix/io/epoll/struct.Owning.html\" title=\"struct rustix::io::epoll::Owning\">Owning</a>&lt;'context, T&gt;&gt;"]],
"socket2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"]],
"tempfile":[["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tempfile/struct.NamedTempFile.html\" title=\"struct tempfile::NamedTempFile\">NamedTempFile</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>,</span>"]],
"tokio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/net/struct.TcpListener.html\" title=\"struct tokio::net::TcpListener\">TcpListener</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/net/struct.UnixListener.html\" title=\"struct tokio::net::UnixListener\">UnixListener</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/net/struct.TcpStream.html\" title=\"struct tokio::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/process/struct.ChildStderr.html\" title=\"struct tokio::process::ChildStderr\">ChildStderr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/net/struct.TcpSocket.html\" title=\"struct tokio::net::TcpSocket\">TcpSocket</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/io/struct.Stdin.html\" title=\"struct tokio::io::Stdin\">Stdin</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/io/struct.Stdout.html\" title=\"struct tokio::io::Stdout\">Stdout</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/process/struct.ChildStdin.html\" title=\"struct tokio::process::ChildStdin\">ChildStdin</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/net/struct.UdpSocket.html\" title=\"struct tokio::net::UdpSocket\">UdpSocket</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/net/struct.UnixDatagram.html\" title=\"struct tokio::net::UnixDatagram\">UnixDatagram</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/io/struct.Stderr.html\" title=\"struct tokio::io::Stderr\">Stderr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/net/struct.UnixStream.html\" title=\"struct tokio::net::UnixStream\">UnixStream</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/io/unix/struct.AsyncFd.html\" title=\"struct tokio::io::unix::AsyncFd\">AsyncFd</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/process/struct.ChildStdout.html\" title=\"struct tokio::process::ChildStdout\">ChildStdout</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio/fs/struct.File.html\" title=\"struct tokio::fs::File\">File</a>"]],
"tokio_native_tls":[["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio_native_tls/struct.TlsStream.html\" title=\"struct tokio_native_tls::TlsStream\">TlsStream</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>,</span>"]],
"tokio_rustls":[["impl&lt;IO&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio_rustls/server/struct.TlsStream.html\" title=\"struct tokio_rustls::server::TlsStream\">TlsStream</a>&lt;IO&gt;<span class=\"where fmt-newline\">where\n    IO: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>,</span>"],["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio_rustls/client/struct.TlsStream.html\" title=\"struct tokio_rustls::client::TlsStream\">TlsStream</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>,</span>"],["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"enum\" href=\"tokio_rustls/enum.TlsStream.html\" title=\"enum tokio_rustls::TlsStream\">TlsStream</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>,</span>"]],
"tokio_util":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> for <a class=\"struct\" href=\"tokio_util/compat/struct.Compat.html\" title=\"struct tokio_util::compat::Compat\">Compat</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()