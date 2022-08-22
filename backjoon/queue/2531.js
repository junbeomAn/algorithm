const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, d, k, c] = input[0].split(' ').map(Number);

let sushi = [];
const count = Array(d + 1).fill(0);
let typeCount = 0;
let max = 0;
const q = [];

for (let i = 1; i < input.length; i++) {
  const s = Number(input[i]);
  sushi.push(s);

  if (i <= k) {
    q.push(s);

    if (count[s] === 0) typeCount += 1;
    count[s] += 1;
  }
}

sushi = sushi.concat(sushi);

max = Math.max(count[c] > 0 ? typeCount : typeCount + 1, max);

for (let i = k; i < N + k; i++) {
  const out = q.shift();
  count[out] -= 1;
  if (count[out] === 0) {
    typeCount -= 1;
  }

  const next = sushi[i];
  count[next] += 1;
  q.push(next);

  if (count[next] === 1) {
    typeCount += 1;
  }

  max = Math.max(count[c] > 0 ? typeCount : typeCount + 1, max);
}
console.log(max);
