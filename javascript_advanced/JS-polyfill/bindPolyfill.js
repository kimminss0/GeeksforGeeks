/** original */
let person1 = {
  firstName: "Person1",
  lastName: "One",
  getFUllName: function (age) {
    return ` My full name is ${this.firstName} ${this.lastName}, and my age is ${age}`;
  }
}

let person2 = {
  firstName: "Person2",
  lastName: "Two",
}

console.log(person1.getFUllName.bind(person2, 27)());

/** polyfill */
Function.prototype.bindPolyfill = function (thisArg, ...args) {
  const method = this;
  return function (...newArgs) {
    return method.apply(thisArg, [...args, ...newArgs]);
  };
}

let person3 = {
  firstName: "Person3",
  lastName: "Three",
}

console.log(person1.getFUllName.bindPolyfill(person3, 28)());
