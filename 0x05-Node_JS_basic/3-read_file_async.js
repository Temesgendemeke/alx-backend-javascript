const fs = require('fs').promises;

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line !== '');
        if (lines.length === 0) {
          throw new Error('Cannot load the database');
        }

        while (lines[lines.length - 1] === '') {
          lines.pop();
        }

        const students = lines.slice(1);
        const fields = {};

        for (const student of students) {
          const [, , , field] = student.split(',');
          if (!field) continue;
          if (!fields[field]) fields[field] = [];
          const name = student.split(',')[0];
          fields[field].push(name);
        }

        const totalStudents = students.length;
        console.log(`Number of students: ${totalStudents}`);

        Object.entries(fields).forEach(([field, names]) => {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
};

module.exports = countStudents;
