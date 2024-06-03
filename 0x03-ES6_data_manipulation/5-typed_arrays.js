export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const arr = new Uint8Array(buffer);
  arr[position] = value;
  return arr;
}
