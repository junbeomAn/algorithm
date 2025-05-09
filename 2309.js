const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let done = false;

function combi(result, idx) {
  if (result.length === 7) {
    if (result.reduce((acc, v) => acc + v, 0) === 100) {
      result.sort((a, b) => a - b);
      console.log(result.join("\n"));
      done = true;
      return;
    }
    return;
  }

  for (let i = idx; i < input.length; i++) {
    if (done) return;
    combi(result.concat(input[i]), ++idx);
  }
}
combi([], 0);
