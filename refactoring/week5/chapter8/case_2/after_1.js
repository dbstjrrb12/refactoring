export class Customer {
  #name;
  #discountRate;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#contract = new CustomerContract(this.dateToday());
    this._setDiscountRage(discountRate);
  }

  get discountRate() {
    return this.#contract.discountRate;
  }

  _setDiscountRage(aNumber) {
    this.#contract.discountRate = aNumber;
  }

  becomePreferred() {
    this._setDiscountRage(this.discountRate + 0.03);
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  #discountRate;
  constructor(startDate, discountRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }

  get discountRate() {
    return this.#discountRate;
  }

  set discountRate(arg) {
    this.#discountRate = arg;
  }
}
