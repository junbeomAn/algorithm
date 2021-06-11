const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const order = input[1].split(" ").map(Number);
let sum = 0;
let total = 0;

order.sort((a, b) => a - b);

for (let i = 0; i < order.length; i++) {
  sum += order[i]
  total += sum

}
console.log(total)
