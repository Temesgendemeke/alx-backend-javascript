export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [keys, values] of map) {
    if (values === 1) {
      map.set(keys, 100);
    }
  }
}
