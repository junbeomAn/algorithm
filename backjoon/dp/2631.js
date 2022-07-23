const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];

const nums = input.slice(1).map(Number);
const dp = Array(n).fill(1);

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[j] < nums[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
const max = Math.max(...dp);

console.log(n - max);
