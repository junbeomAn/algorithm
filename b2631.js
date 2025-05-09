var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const nums = input.slice(1).map(Number);

// [3, 7, 5, 2, 6, 1, 4]
const N = +input[0];
const dp = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(N - Math.max(...dp));
