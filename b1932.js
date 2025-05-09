var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const triangle = input.slice(1).map((r) => r.split(" ").map(Number));

const dp = Array(N)
  .fill(0)
  .map((_, i) => Array(i + 1).fill(0));

dp[0][0] = triangle[0][0];

for (let i = 1; i < N; i++) {
  const row = triangle[i];
  const prev = dp[i - 1];

  dp[i][0] = prev[0] + row[0];

  for (let j = 1; j < row.length - 1; j++) {
    dp[i][j] = Math.max(prev[j - 1], prev[j]) + row[j];
  }

  dp[i][row.length - 1] = prev[prev.length - 1] + row[row.length - 1];
}
console.log(Math.max(...dp[N - 1]));
