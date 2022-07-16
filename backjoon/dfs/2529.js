const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const k = +input[0];
const sign = input[1].split(' ');
let min = Infinity;
let max = -Infinity;
const used = Array(10).fill(false);

dfs(0, '');
console.log(`${max}`.padStart(k + 1, '0'));
console.log(`${min}`.padStart(k + 1, '0'));

function dfs(L, acc) {
  if (L === k + 1) {
    min = Math.min(min, +acc);
    max = Math.max(max, +acc);
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (used[i]) continue;
    if (L > 0 && !checkCondition(L - 1, acc[acc.length - 1], `${i}`)) continue;

    used[i] = true;
    dfs(L + 1, acc + i);
    used[i] = false;
  }
}

function checkCondition(i, a, b) {
  const c = sign[i];

  if (c === '>') return a > b;
  else return a < b;
}
