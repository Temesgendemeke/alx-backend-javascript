export default function cleanSet(set, startString) {
  const text = [];
  set.forEach((value) => {
    if (value.startsWith(startString) && startString !== '') {
      text.push(value.substring(startString.length));
    }
  });
  return text.join('-');
}
