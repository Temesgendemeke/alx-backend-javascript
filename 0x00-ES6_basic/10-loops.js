export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  for (const idx of array) {
    const value = idx;
    newarray.push(appendString + value);
  }

  return newarray;
}
