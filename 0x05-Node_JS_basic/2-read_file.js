const fs = require('fs');

function countStudents(path){
    try{
    let data = fs.readFileSync(path, 'utf8').toString().split('\n')

    let parsed_data = data.slice(1, data.length)
    let cs = parsed_data.filter((student) => student.split(',')[3] === 'CS')
    let swe = parsed_data.filter((student) => student.split(',')[3] === 'SWE')
    
    console.log(`Number of students: ${parsed_data.length}`)
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.map((student) => student.split(',')[0]).join(', ')}`)
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.map((student) => student.split(',')[0]).join(', ')}`)
    }
    catch (error){
        throw new Error("Cannot load the database");
    }
    
}    

module.exports = countStudents;