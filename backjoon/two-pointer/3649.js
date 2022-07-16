const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const nanoMeterUnit = 10000000;
let i = 0;
let res = '';

while (i < input.length) {
  const target = +input[i++] * nanoMeterUnit;
  const n = +input[i++];
  const nums = [];
  for (let j = i; j < n + i; j++) {
    nums.push(+input[j]);
  }
  i += n;
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      res += `yes ${nums[left]} ${nums[right]}\n`;
      break;
    } else if (nums[left] + nums[right] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  if (left >= right) {
    res += `danger\n`;
  }
}
console.log(res);
