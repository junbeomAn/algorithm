// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = `3
8 5
1 100
3 5`.split("\n");

const N = +input[0];

// [s, w]
const eggs = input.slice(1).map((r) => r.split(" ").map(Number));
let max = -Infinity;

function dfs(n) {
  if (n === N - 1) {
    max = Math.max(max, eggs.filter(([s]) => s < 1).length);
    console.log(n, eggs);
    return;
  }
  if (eggs[n][0] > 0) {
    for (let i = n + 1; i < N; i++) {
      if (eggs[i][0] < 1) continue;

      eggs[n][0] -= eggs[i][1];
      eggs[i][0] -= eggs[n][1];

      dfs(n + 1);

      eggs[n][0] += eggs[i][1];
      eggs[i][0] += eggs[n][1];
    }
  } else {
    dfs(n + 1);
  }
}

dfs(0);
console.log(max);
