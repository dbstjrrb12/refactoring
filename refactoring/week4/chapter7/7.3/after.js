export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  get priority() {
    return this.priority;
  }

  get priorityString() {
    return this.priority.toString();
  }

  set priority(aString) {
    this.priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this._value = value;
    else throw new Error(`${value}는 유효하지 않은 값입니다.`);
  }
  toString() {
    return this._value;
  }
  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }
  static legalValues() {
    return ['row', 'normal', 'high', 'rush'];
  }
  equals(other) {
    return this._index === other._index;
  }
  higherThan(other) {
    return this._index > other._index;
  }
  lowerThan(other) {
    return this._index < other._index;
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  (o) => 'high' === o.priority.toString() || 'rush' === o.priority.toString()
).length;
