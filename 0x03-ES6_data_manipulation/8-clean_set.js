export default function cleanSet(set, startString) {
  const list = [];
  for (const value of set) {
    if (value.startsWith(startString) && startString.length > 0) {
      list.push(value.substring(startString.length));
    }
  }
  return list.join('-');
}
