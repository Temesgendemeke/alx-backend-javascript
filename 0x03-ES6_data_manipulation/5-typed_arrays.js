export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const arr = new Uint8Array(buffer);
  try{
    arr[position] = value;
  }catch(err){
    throw new Error("Position outside range")
  }
  return new DataView(buffer);
}
