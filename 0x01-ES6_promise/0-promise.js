export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (resolve) return resolve;
    return reject;
  });
}
