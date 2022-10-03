const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i += 2) {
  const N = +input[i];
  const nums = input[i + 1].split(' ').map(Number);

  let profit = 0;
  let max = -1;

  for (let j = N - 1; j >= 0; j--) {
    max = Math.max(nums[j], max);
    profit += max - nums[j];
  }
  console.log(profit);
}
