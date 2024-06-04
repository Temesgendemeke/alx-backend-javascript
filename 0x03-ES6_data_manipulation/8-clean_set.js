export default function cleanSet(set, startString) {
  const text = [];
  if (!set || !(set instanceof Set) || (typeof startString !== 'string') || !startString) {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString) && startString !== '' && typeof value == 'string') {
      text.push(value.substring(startString.length));
    }
  });
  return text.join('-');
}
