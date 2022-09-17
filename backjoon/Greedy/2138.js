const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const origin = input[1];
const target = input[2];

const copy1 = origin.slice().split('');
const copy2 = origin.slice().split('');

let possible = false;
let answer = 0;
let res = Infinity;

// 0 index press
copy1[0] = copy1[0] === '1' ? '0' : '1';
copy1[1] = copy1[1] === '1' ? '0' : '1';
answer += 1;

for (let i = 1; i < N - 1; i++) {
  if (copy1[i - 1] !== target[i - 1]) {
    copy1[i - 1] = copy1[i - 1] === '1' ? '0' : '1';
    copy1[i] = copy1[i] === '1' ? '0' : '1';
    copy1[i + 1] = copy1[i + 1] === '1' ? '0' : '1';
    answer += 1;
  }
}

if (copy1[N - 2] !== target[N - 2]) {
  copy1[N - 2] = copy1[N - 2] === '1' ? '0' : '1';
  copy1[N - 1] = copy1[N - 1] === '1' ? '0' : '1';
  answer += 1;
}
if (copy1.join('') === target) {
  possible = true;
  res = Math.min(answer, res);
}

answer = 0;
// 0 index non-press
for (let i = 1; i < N - 1; i++) {
  if (copy2[i - 1] !== target[i - 1]) {
    copy2[i - 1] = copy2[i - 1] === '1' ? '0' : '1';
    copy2[i] = copy2[i] === '1' ? '0' : '1';
    copy2[i + 1] = copy2[i + 1] === '1' ? '0' : '1';
    answer += 1;
  }
}

if (copy2[N - 2] !== target[N - 2]) {
  copy2[N - 2] = copy2[N - 2] === '1' ? '0' : '1';
  copy2[N - 1] = copy2[N - 1] === '1' ? '0' : '1';
  answer += 1;
}
if (copy2.join('') === target) {
  possible = true;
  res = Math.min(answer, res);
}

if (possible) {
  console.log(res);
} else {
  console.log(-1);
}
