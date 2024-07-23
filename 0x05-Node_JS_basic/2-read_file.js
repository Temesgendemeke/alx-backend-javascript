const fs = require('fs');

const countStudents = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8').toString().split('\n');
        const parsedData = data.slice(1, data.length);
        subject = {};
        for (const student of parsedData) {
            if (student.split(',')[3] in subject) {
                subject[student.split(',')[3]].push(student.split(',')[0]);
            } else {
                subject[student.split(',')[3]] = [student.split(',')[0]];
            }
        }
        console.log(`Number of students: ${parsedData.length}`);
        console.log(`Number of students in CS: ${subject.CS.length}. List: ${subject.CS.join(', ')}`);
        console.log(`Number of students in SWE: ${subject.SWE.length}. List: ${subject.SWE.join(', ')}`);
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;