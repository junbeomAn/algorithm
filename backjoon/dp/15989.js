const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const inputs = input.slice(1).map(Number);
const N = 10001;
const dp = Array(N).fill(1);

for (let i = 2; i < N; i++) {
  dp[i] = dp[i] + dp[i - 2];
}

for (let i = 3; i < N; i++) {
  dp[i] = dp[i] + dp[i - 3];
}

inputs.forEach(v => {
  console.log(dp[v]);
});
