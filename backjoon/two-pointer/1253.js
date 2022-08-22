const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const nums = input[1].split(' ').map(Number);

nums.sort((a, b) => a - b);

let good = [];

for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (left === i) {
      left += 1;
      continue;
    }
    if (right === i) {
      right -= 1;
      continue;
    }

    if (nums[left] + nums[right] < n) left += 1;
    else if (nums[left] + nums[right] > n) right -= 1;
    else {
      good.push(n);
      break;
    }
  }
}
console.log(good.length);
