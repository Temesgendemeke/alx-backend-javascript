const http = require('http');
const { stdout } = require('process');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;
const databasePath = 'database.csv'; // Assuming the database file is named 'database.csv'

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) throw new Error('No data found');

    const students = lines.slice(1); // Exclude header
    const fields = {};

    for (const student of students) {
      const [, , , field] = student.split(',');
      if (!field) continue; // Skip if no field
      if (!fields[field]) fields[field] = [];
      const name = student.split(',')[0];
      fields[field].push(name);
    }

    let message = `Number of students: ${students.length}\n`;
    Object.entries(fields).forEach(([field, names]) => {
      message += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    });

    return message;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const message = await countStudents(databasePath);
      res.end(`This is the list of our students${message}`);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(port, hostname, () => {
  stdout.write('...');
});

module.exports = app;