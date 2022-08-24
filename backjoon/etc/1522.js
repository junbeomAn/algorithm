const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const S = input[0] + input[0];

let min = Infinity;
let windowSize = 0;
const w = [];

for (let i = 0; i < S.length / 2; i++) {
  if (S[i] === 'a') windowSize += 1;
}
for (let i = 0; i < windowSize; i++) {
  w.push(S[i]);
}

min = Math.min(min, w.filter(v => v === 'b').length);

for (let i = windowSize; i < S.length; i++) {
  w.shift();
  w.push(S[i]);
  min = Math.min(min, w.filter(v => v === 'b').length);
}

console.log(min);
