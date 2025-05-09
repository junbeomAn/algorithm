var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input;

const dp = Array(N + 1).fill(-1);

dp[3] = 1;
dp[5] = 1;

for (let i = 6; i <= N; i++) {
  if (dp[i - 3] !== -1 && dp[i - 5] !== -1) {
    dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
  } else if (dp[i - 3] !== -1) {
    dp[i] = dp[i - 3] + 1;
  } else if (dp[i - 5] !== -1) {
    dp[i] = dp[i - 5] + 1;
  }
}
console.log(dp[N]);
