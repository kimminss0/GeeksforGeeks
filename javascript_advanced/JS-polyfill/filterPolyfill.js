/** original */
const persons = [{ name: 'Person1', age: 23 }, { name: 'Person2', age: 25 }, { name: 'Person3', age: 27 }];

const eligiblePersons = persons.filter((person, index) => {
  return person.age <= 25;
});

console.log(eligiblePersons);

/** polyfill */
Array.prototype.filterPolyfill = function (callback) {
  const arr = [];
  this.forEach((value, index) => callback(value, index) ? arr.push(value) : {});
  return arr;
};

const eligiblePersonsV2 = persons.filterPolyfill((person, index) => person.age <= 25);
console.log(eligiblePersonsV2);