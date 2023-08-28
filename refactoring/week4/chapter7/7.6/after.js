export class Shipment {
  #shippingCompany;
  #trackingNumber;
  constructor(company, number) {
    this.#shippingCompany = company;
    this.#trackingNumber = number;
  }

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }

  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }
}

const shipment = new Shipment('Maersk', 999);
console.log(shipment.trackingInfo);

shipment.shippingCompany = 'COSCO';
console.log(shipment.trackingInfo);
