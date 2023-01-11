/** assn09 */
let obj = { name: "Prakash", age: 111, hairColor: "black", likes: "food" };

let out = {};
for (let key in obj) {
  out[obj[key]] = key;
}
console.log(out);