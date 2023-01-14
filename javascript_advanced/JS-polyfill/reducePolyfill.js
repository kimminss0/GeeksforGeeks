/** original */
const arr = [1, 3, 5, 7, 9];

const reducedValue = arr.reduce((a, b) => a + b);

console.log(reducedValue);

/** polyfill v1, inner loop */
Array.prototype.reducePolyfill = function (callback, initialValue) {
  if (!this.length) return 0;
  let indexStart = 0;
  if (initialValue === undefined) {
    initialValue = this[0];
    indexStart = 1;
  }
  for (let i = indexStart; i < this.length; i++) {
    initialValue = callback(initialValue, this[i]);
  }
  return initialValue;
}

const reducedValueV2 = arr.reducePolyfill((a, b) => a + b);
console.log(reducedValueV2);

/** polyfill v2, applying FP */
Array.prototype.reducePolyfillV2 = function (callback, initialValue) {
  if (!this.length) return initialValue ?? 0;
  const reducing = this[0];
  const remainder = this.filter(($, index) => index !== 0);
  const accumulated = (initialValue !== undefined) ? callback(initialValue, reducing) : reducing;
  return remainder.reducePolyfillV2(callback, accumulated);
}

const reducedValueV3 = arr.reducePolyfillV2((a, b) => a + b);
console.log(reducedValueV3);