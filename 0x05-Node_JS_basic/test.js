const fs = require('fs')

data = fs.readFileSync('database.csv', 'utf8').toString().split('\n')

parsed_data = data.slice(1, data.length)
cs = []
swe = []
console.log(`Number of students: ${parsed_data.length}`)
console.log(`Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`)


