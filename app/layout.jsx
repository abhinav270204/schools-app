export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "10px", background: "#f0f0f0" }}>
          <h1>Schools App</h1>
          <nav>
            <a href="/">Home</a> | <a href="/addSchool">Add School</a> |{" "}
            <a href="/showSchools">Show Schools</a>
          </nav>
        </header>
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}