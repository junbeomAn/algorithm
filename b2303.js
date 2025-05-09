var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputs = input.slice(1).map((r) => r.split(" ").map(Number));

let max = -Infinity;
let idx = -1;

inputs.forEach((cards, i) => {
  function recursion(n, sum, len) {
    if (len === 3) {
      const num = sum % 10;
      if (num >= max) {
        max = num;
        idx = i;
      }
      return;
    }

    for (let i = n; i < cards.length; i++) {
      recursion(i + 1, sum + cards[i], len + 1);
    }
  }
  recursion(0, 0, 0);
});
console.log(idx + 1);
