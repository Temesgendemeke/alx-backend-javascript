const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '192.0.0.1';
const port = 1245;
const path = process.argv[2];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/students') {
        res.write('This is the list of our students\n');
    } else if (req.url === '/students/cs') {
        res.write('This is the list of our CS students\n');
        countStudents(path)
    } else {
        res.write('Hello Holberton School!');
    }
  });

  server.listen(port, hostname, () => {
    stdout.write('...');
  });

module.exports = server;