export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    return list.map((element) => element.id);
  }
  return [];
}
