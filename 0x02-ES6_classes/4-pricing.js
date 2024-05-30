class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  setAmount() {
    return this._amount;
  }

  setCurrency() {
    return this._currency;
  }

  getAmount(amount) {
    this._amount = amount;
  }

  getCurrency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new TypeError('amount must be a number');
    else if (typeof conversionRate !== 'number') throw new TypeError('conversionRate must be number');
    return amount * conversionRate;
  }
}

export default Pricing;
