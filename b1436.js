var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input;

let n = 0;
let i = 0;
while (n !== N) {
  i += 1;
  if (String(i).includes("666")) {
    n += 1;
  }
}

console.log(i);
