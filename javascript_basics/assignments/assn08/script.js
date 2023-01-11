/** assn08 */
const readline = require("readline-sync");
const input = readline.question();
console.log(input.split(" ").map((value) => value.trim()).join(""));