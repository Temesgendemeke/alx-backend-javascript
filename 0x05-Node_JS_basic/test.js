const fs = require('fs')

data = fs.readFileSync('database.csv', 'utf8').toString().split('\n')

let parsed_data = data.slice(1, data.length)
let cs = parsed_data.filter((student) => student.split(',')[3] === 'CS')
let swe = parsed_data.filter((student) => student.split(',')[3] === 'SWE')

console.log(`Number of students: ${parsed_data.length}`)
console.log(`Number of students in CS: ${cs.length}. List: ${cs.map((student) => student.split(',')[0]).join(', ')}`)
console.log(`Number of students in SWE: ${swe.length}. List: ${swe.map((student) => student.split(',')[0]).join(', ')}`)

