/** original */
const persons = [{ name: 'Person1', age: 23 }, { name: 'Person2', age: 25 }, { name: 'Person3', age: 27 }];

persons.forEach((person, index) => {
  person.age += 10;
});

console.log(persons);

/** polyfill */
Array.prototype.forEachPolyfill = function (callback) {
  const length = this.length;
  for (let index = 0; index < length; index++) {
    callback(this[index], index);
  }
};

persons.forEachPolyfill((person, index) => {
  person.age += 10;
});

console.log(persons);