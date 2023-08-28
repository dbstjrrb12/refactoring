import { customerData } from './before';

import cloneDeep from 'lodash/cloneDeep';

const getCustomerData = () => {
  return customerData;
};

const getRawDataOfCustomers = () => {
  return customerData._data;
};

const setRawDataOfCustomers = (arg) => {
  customerData = new CustomerData(arg);
};

export function compareUsage(customerId, laterYear, month) {
  const later = getCustomerData().usages(customerId, laterYear, month);
  const earlier = getCustomerData().usages(customerId, laterYear - 1, month);

  return {
    laterAmount: later,
    change: later - earlier,
  };
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerId, year, month, amount) {
    this._data[customerId].usages[year][month] = amount;
  }

  usage(customerId, year, month) {
    return this._data[customerId].usage[year][month];
  }

  get rawData() {
    return cloneDeep(this.data);
  }
}
