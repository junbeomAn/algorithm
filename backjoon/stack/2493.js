const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const nums = input[1].split(' ').map(Number);

const stack = [];

let s = '';
stack.push([nums[0], 0]);

for (let i = 1; i < nums.length; i++) {
  const curr = nums[i];
  while (stack.length && stack[stack.length - 1][0] <= curr) {
    stack.pop();
  }
  if (stack.length) {
    s += ` ${stack[stack.length - 1][1] + 1}`;
  } else {
    s += ` 0`;
  }
  stack.push([curr, i]);
}

s = '0' + s;

console.log(s);
