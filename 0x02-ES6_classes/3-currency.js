class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw new TypeError('Code must be string');
    else if (typeof name !== 'string') throw new TypeError('Name must be string');
    this.code = code;
    this.name = name;
  }

  getCode() {
    return this._code;
  }

  getName() {
    return this._name;
  }

  setCode(code) {
    if (typeof code !== 'string') throw new TypeError('Code must be string');
    this._code = code;
  }

  setName(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be string');
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
