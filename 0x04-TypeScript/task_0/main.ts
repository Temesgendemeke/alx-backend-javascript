interface Student{
    firstName: String,
    lastName: String,
    age: Number,
    location: String
}

let student1:Student = {
    firstName: "someone",
    lastName:"father",
    age:21,
    location:"location"
}
let student2:Student = {
    firstName: "someone2",
    lastName:"father",
    age:22,
    location:"location"
}

let studentsList: Array<Student>  = [student1, student2] 

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHead = document.createElement('thead');
const tableBody = document.createElement('tbody');
const headerRow = document.createElement('tr');

const headers = ['First Name', 'Location'];
headers.forEach(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});

tableHead.appendChild(headerRow);
table.appendChild(tableHead);

studentsList.forEach(student => {
  const row = document.createElement('tr');
  
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);
  
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);