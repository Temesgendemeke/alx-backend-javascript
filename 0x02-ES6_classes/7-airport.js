export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') throw new TypeError('name must be nuber');
    if (typeof code !== 'string') throw new TypeError('code must be nuber');

    this.name = name;
    this.code = code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
