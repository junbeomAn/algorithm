// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim();

input = `2 86486400`;

const [G, L] = input.split(" ").map(Number);

const multiple = L * G;
let min = Infinity;
let A = 0;
let B = 0;

for (let i = 1; i < multiple / 2; i++) {
  const b = multiple / i;
  const isDiv = Number.isInteger(b);

  if (isDiv && min > b + i) {
    min = b + i;
    B = b;
    A = i;
  }
}

console.log(`${A} ${B}`);
