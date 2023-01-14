/** original */
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.map((value, index) => value * 5);
console.log(arr2);

/** polyfill */
Array.prototype.mapPolyfill = function (callback) {
  const arr = [];
  this.forEach((value, index) => arr.push(callback(value, index)));
  return arr;
};

const arr3 = arr1.mapPolyfill(value => value * 5);
console.log(arr3);