function foundPerson(people) {
  const canditate = ['John', 'Don', 'Kent'];
  return people.find((person) => canditate.includes(person) || '');
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));
