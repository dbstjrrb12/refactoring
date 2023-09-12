export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngesAge()}, totalSalary: ${totalSalary()}`;

  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }

  function youngesAge() {
    return Math.min(...people.map((p) => p.age));
  }
}
