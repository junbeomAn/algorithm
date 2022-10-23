const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M, L, K] = input[0].split(' ').map(Number);
let max = Number.MIN_SAFE_INTEGER;
const pos = [];

for (let i = 1; i <= K; i++) {
  pos.push(input[i].split(' ').map(Number));
}

function getCount(sx, sy) {
  let count = 0;
  pos.forEach(([x, y]) => {
    if (sx <= x && x <= sx + L && sy <= y && y <= sy + L) {
      count += 1;
    }
  });
  return count;
}

for (let a = 0; a < K; a++) {
  for (let b = 0; b < K; b++) {
    max = Math.max(max, getCount(pos[a][0], pos[b][1]));
  }
}

console.log(K - max);
