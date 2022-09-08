const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const str = input[0];
const target = input[1];

const stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  if (stack.legnth < target.length) continue;

  let isBomb = true;
  let curr = stack.length - 1;
  for (let j = target.length - 1; j >= 0; j--) {
    if (stack[curr] !== target[j]) {
      isBomb = false;
      break;
    }
    curr -= 1;
  }
  let count = target.length;
  while (isBomb && count > 0) {
    stack.pop();
    count -= 1;
  }
}
const res = stack.join('');

console.log(res === '' ? 'FRULA' : res);
