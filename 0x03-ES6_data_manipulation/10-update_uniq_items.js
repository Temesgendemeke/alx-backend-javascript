export default function updateUniqueItems(map) {
  for (const [keys, values] of map) {
    if (values === 1) {
      map.set(keys, 100);
    }
  }
}
