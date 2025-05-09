var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);

const lines = input.slice(1).map(Number);

const max = Math.max(...lines);

let left = 1;
let right = max;
let mid = Math.floor((left + right) / 2);
let result = 1;

while (left <= right) {
  if (checkCount(mid) < N) {
    right = mid - 1;
  } else {
    result = Math.max(result, mid);
    left = mid + 1;
  }
  mid = Math.floor((left + right) / 2);
}
console.log(result);

function checkCount(len) {
  return lines.reduce((acc, line) => Math.floor(line / len) + acc, 0);
}
