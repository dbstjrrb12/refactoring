export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses.slice();
  }

  addCourse(aCourse) {
    this.#courses.push(aCourse);
  }

  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this.#courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
ellie.addCourse(new Course('리팩토링', true));
console.log(ellie.courses.length);
