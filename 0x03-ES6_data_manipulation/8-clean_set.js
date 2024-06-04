export default function cleanSet(set, startString) {
  const text = [];

  if (!set || (typeof set !== 'object') || (typeof startString !== 'string') || startString === '') {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      text.push(value.substring(startString.length));
    }
  });
  return text.join('-');
}
