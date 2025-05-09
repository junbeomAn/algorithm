var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const ropes = input.slice(1).map(Number);

ropes.sort((a, b) => a - b);

let max = 0;
for (let i = 0; i < N; i++) {
  const rope = ropes[i];
  const usedRopeCnt = N - i;

  max = Math.max(max, usedRopeCnt * rope);
}

console.log(max);
