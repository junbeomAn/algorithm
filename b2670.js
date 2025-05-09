var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const nums = input.slice(1).map(Number);
const dp = Array(nums.length).fill(0);

dp[0] = nums[0];

for (let i = 1; i < nums.length; i++) {
  dp[i] = nums[i] < dp[i - 1] * nums[i] ? dp[i - 1] * nums[i] : nums[i];
}

console.log(Math.max(...dp).toFixed(3));
