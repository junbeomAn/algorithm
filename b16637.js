var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let max = -Infinity;
const exp = splitIntoChunk(input[1]);

function dfs(result, i) {
  if (i >= exp.length) {
    max = Math.max(result, max);
    return;
  }

  dfs(calc(exp[i], result, exp[i + 1]), i + 2);

  if (i < exp.length - 3) {
    dfs(calc(exp[i], result, calc(exp[i + 2], exp[i + 1], exp[i + 3])), i + 4);
  }
}

function calc(op, a, b) {
  switch (op) {
    case "+":
      return Number(a) + Number(b);
    case "-":
      return Number(a) - Number(b);
    default:
      return Number(a) * Number(b);
  }
}

function splitIntoChunk(exp) {
  let acc = "";
  const result = [];

  for (let i = 0; i < exp.length; i++) {
    if (["+", "-", "*"].includes(exp[i])) {
      result.push(acc);
      result.push(exp[i]);
      acc = "";
    } else {
      acc += exp[i];
    }
  }
  result.push(acc);
  return result;
}

dfs(+exp[0], 1);
console.log(max);
