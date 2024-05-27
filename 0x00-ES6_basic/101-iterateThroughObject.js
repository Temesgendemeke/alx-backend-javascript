export default function iterateThroughObject(reportWithIterator) {
  const array = [];
  for (const value of reportWithIterator) {
    array.push(value);
  }

  return array.toString().replaceAll(',', " | ");
}
