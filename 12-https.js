const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  } else if (req.url === "/hello") {
    res.end("Hello world");
  } else {
    res.end(`
    <h1>Oops !</h1>
    <p>We can't find the page you're looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
