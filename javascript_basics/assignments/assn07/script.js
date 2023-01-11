/** assn07 */
const readline = require("readline-sync");
const input = readline.question();
let [mailId, domain] = input.split("@");
console.log(mailId.slice(0, mailId.length/2).concat("...", domain));