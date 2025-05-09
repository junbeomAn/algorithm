const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function getResult(a, b, c) {
  if (a === b && b === c) {
    return 10000 + a * 1000;
  } else if (a === b || b === c || a === c) {
    const same = a === b ? a : b === c ? b : c;
    return 1000 + same * 100;
  } else {
    return Math.max(a, b, c) * 100;
  }
}

console.log(getResult(input[0], input[1], input[2]));
