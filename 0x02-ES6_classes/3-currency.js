class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw new TypeError('Code must be string');
    else if (typeof name !== 'string') throw new TypeError('Name must be string');
    this.code = code;
    this.name = name;
  }

  getCode() {
    return this.code;
  }

  getName() {
    return this.name;
  }

  setCode(code) {
    if (typeof code !== 'string') throw new TypeError('Code must be string');
    this.code = code;
  }

  setName(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be string');
    this.name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
