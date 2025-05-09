var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const lBtms = input.slice(1).map((r) => r.split(" ").map(Number));
const N = 101;
const board = Array(N)
  .fill(0)
  .map(() => Array(N).fill(0));
const len = 10;

lBtms.forEach(([x, y]) => {
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      board[i][j] = 1;
    }
  }
});
let area = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1) {
      area += 1;
    }
  }
}
console.log(area);
