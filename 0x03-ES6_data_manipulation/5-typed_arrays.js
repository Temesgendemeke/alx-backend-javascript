export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  if(int8Array.length < position) throw new Error("Position outside range")
  int8Array[position] = value
  return new DataView(buffer);
}
