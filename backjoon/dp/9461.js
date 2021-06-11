const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cases = input.slice(1).map(Number);
const nums = [0, 1, 1, 1, 2];

for (let i = 0; i < cases.length; i++) {
  const num = cases[i];
  if (nums[num]) {
    console.log(nums[num]);
    continue;
  }

  for (let j = 5; j <= num; j++) {
    nums[j] = nums[j - 5] + nums[j - 1]
  }
  console.log(nums[num]);
}
