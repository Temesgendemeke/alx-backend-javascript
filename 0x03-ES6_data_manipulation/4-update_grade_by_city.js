export default function updateStudentGradeByCity(students, city, newGrades) {
    let student = students.filter((s) => city == s.location)
                          .map(element => {
                            if (element.id === newGrades.id)
                                element.grade = newGrades.grade
                          })
    console.log(student)

  }