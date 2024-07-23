const fs = require('fs');

function countStudents(path){

fs.readFile(path, 'utf8', (err, data)=>{

    if (err){
        throw new Error("Cannot load the database")
    }

    let number_of_students = data.split('\n').length - 1
    let cs_students = []
    let swe_students = []

    for (let i = 1; i <= number_of_students; i++){
        if (data.split('\n')[i].split(',')[3] === 'CS'){
            cs_students.push(data.split('\n')[i].split(','))
        }
        else if (data.split('\n')[i].split(',')[3] === 'SWE'){
            swe_students.push(data.split('\n')[i].split(','))
        }
    }
    console.log(`Number of students: ${number_of_students}`)
    console.log(`Number of students in CS: ${cs_students.length}. List: ${cs_students.map((student)=>student[0]).join(', ')}`)
    console.log(`Number of students in SWE: ${swe_students.length}. List: ${swe_students.map((student)=>student[0]).join(', ')}`)
})
}

module.exports = countStudents;