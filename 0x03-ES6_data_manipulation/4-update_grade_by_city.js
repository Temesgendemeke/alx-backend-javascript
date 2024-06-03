export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsCity = students.filter((student) => student.location === city);

  const updated = studentsCity.map((student) => {
    const newgrade = newGrades.filter((grade) => grade.studentId === student.id);

    if (newgrade.length === 0) {
      return { ...student, grade: 'N/A' };
    }
    return { ...student, grade: newgrade[0].grade };
  });

  return updated;
}
