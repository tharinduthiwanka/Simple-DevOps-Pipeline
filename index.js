const http = require('http');
const hostname = '0.0.0.0'; // Important change!
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send("🚀 Hello from CI/CD pipeline!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
