// Task 3: a plain server using only the built-in http module
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello");
});

server.listen(PORT, () => {
  console.log(`Plain http server running on port ${PORT}`);
});
