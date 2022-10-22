const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const status = input[1].split(' ').map(Number);
const N = +input[0];
const T = +input[2];

function operateBoy(num) {
  for (let i = 0; i < N; i++) {
    if ((i + 1) % num === 0) {
      status[i] = status[i] === 1 ? 0 : 1;
    }
  }
}

function operateGirl(num) {
  const mid = num - 1;
  let left = mid;
  let right = mid;
  while (status[left] === status[right]) {
    left -= 1;
    right += 1;
  }
  for (let i = left + 1; i < right; i++) {
    status[i] = status[i] === 1 ? 0 : 1;
  }
}

function implement(s, num) {
  const boy = 1;

  if (s === boy) {
    operateBoy(num);
  } else {
    operateGirl(num);
  }
}

for (let i = 3; i < T + 3; i++) {
  const [s, num] = input[i].split(' ').map(Number);
  implement(s, num);
}

let res = '';

for (let i = 0; i < status.length; i++) {
  if (i > 0 && i % 20 === 0) {
    res += '\n';
  }
  res += (i !== 0 && i % 20 !== 0 ? ' ' : '') + status[i];
}
console.log(res);
