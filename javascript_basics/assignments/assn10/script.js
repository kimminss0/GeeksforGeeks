/** assn10 */
const numbers = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5];
let counts = {};
for (let num of numbers) {
  if (counts[num] === undefined) {
    counts[num] = 0;
  }
  counts[num]++;
}
let coupled = {};
let max = -1;
for (let num in counts) {
  max = max<counts[num] ? counts[num] : max;
  if (coupled[counts[num]] === undefined) {
    coupled[counts[num]] = [];
  }
  coupled[counts[num]].push(num);
}
console.log(coupled[max].sort().reverse()[0]);