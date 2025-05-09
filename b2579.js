var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const stairs = input.slice(1).map(Number);

const dp = Array(N + 1).fill(0);

dp[1] = stairs[0];
dp[2] = dp[1] + stairs[1];

for (let i = 3; i < N + 1; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i - 1],
    dp[i - 3] + stairs[i - 2] + stairs[i - 1]
  );
}
console.log(dp[N]);
