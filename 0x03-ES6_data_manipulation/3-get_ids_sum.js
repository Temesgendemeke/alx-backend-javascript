export default function getStudentsByLocation(list) {
  return list.reduce((accumlater, currentValue) => accumlater + currentValue.id, 0);
}
