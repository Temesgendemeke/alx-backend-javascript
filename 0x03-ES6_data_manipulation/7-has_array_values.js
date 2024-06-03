export default function hasValuesFromArray(set, arr) {
  const newset = new Set(arr);
  return newset.isSubsetOf(set);
}
