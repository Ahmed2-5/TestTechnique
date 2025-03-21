const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><head><title>myexample.com</title></head><body><h1>Hello Gentaur!</h1></body></html>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://myexample.com:${port}/`);
});