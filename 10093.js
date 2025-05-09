const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

input.sort((a, b) => a - b);
const [a, b] = input;

console.log(b - a - 1);

let result = [];

for (let i = a + 1; i < b; i++) {
  result.push(i);
}
if (result.length > 0) {
  console.log(result.join(" "));
}
  
