class Person {
  #name;
  #officeAreaCode;
  #officeNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#officeAreaCode = areaCode;
    this.#officeNumber = number;
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }
}

class TelephoneNumber {
  constructor(code, number) {
    this._areaCode = code;
    this._number = number;
  }

  get areaCode() {
    return this._areaCode;
  }

  set areaCode(arg) {
    this._areaCode = arg;
  }

  get number() {
    return this._number;
  }

  set number(arg) {
    this._number = arg;
  }

  toString() {
    return `(${this.areaCode}) ${this._number}`;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
