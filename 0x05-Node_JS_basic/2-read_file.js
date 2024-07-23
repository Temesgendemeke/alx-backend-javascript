const fs = require('fs');

const countStudents = (path) => {
    try {
        let data = fs.readFileSync(path, 'utf8').toString().split('\n');
        data = data.slice(1, data.length);
        let student = {}

        for (const row of data) {
            const studentData = row.split(',');
            if (!student[studentData[3]]) {
                student[studentData[3]] = [];
            }
            student[studentData[3]].push(studentData[0]);
        }

        console.log(`Number of students: ${data.length}`);
        for (const key in student) {
            if (key) {
                const list = student[key];
                console.log(`Number of students in ${key}: ${list.length}. List: ${list.join(', ')}`);
            }
        }

    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;