var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const costs = input.slice(1).map((r) => r.split(" ").map(Number));

const dp = Array(N + 1)
  .fill(0)
  .map(() => Array(3).fill(0));

dp[1][0] = costs[0][0];
dp[1][1] = costs[0][1];
dp[1][2] = costs[0][2];

for (let i = 2; i < N + 1; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i - 1][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i - 1][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i - 1][2];
}

console.log(Math.min(...dp[N]));
