var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const seq = input[1].split(" ").map(Number);
const F = Array(1000001).fill(0);
const opposite = [];

for (const n of seq) {
  F[n] += 1;
}

let result = "-1";
opposite.push(seq.pop());

while (seq.length) {
  const top = seq.pop();
  let isNGF = false;
  let i = opposite.length - 1;

  while (opposite.length) {
    const n = opposite[i--];

    if (F[n] > F[top]) {
      result = `${n} ${result}`;
      isNGF = true;
      break;
    } else {
      opposite.pop();
    }
  }

  if (!isNGF) {
    result = `-1 ${result}`;
  }
  opposite.push(top);
}
console.log(result.trim());
