var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const PLUS = 10_000_000;
const nums = input[1].split(" ").map((n) => +n + PLUS);
const targets = input[3].split(" ").map((n) => +n + PLUS);

const map = {};
let result = "";

for (const n of nums) {
  if (map[n]) {
    map[n] += 1;
  } else {
    map[n] = 1;
  }
}

for (const t of targets) {
  if (map[t]) {
    result += ` ${map[t]}`;
  } else {
    result += ` 0`;
  }
}
console.log(result.trim());
