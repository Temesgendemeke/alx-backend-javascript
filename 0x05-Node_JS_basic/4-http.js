const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

module.exports = app.listen(port, hostname);
