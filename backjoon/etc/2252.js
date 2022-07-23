const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n] = input[0].split(' ').map(Number);

const adjs = Array(n + 1)
  .fill(0)
  .map(_ => Array());
const inDegree = Array(n + 1).fill(0);

for (let i = 1; i < input.length; i++) {
  const [s, e] = input[i].split(' ').map(Number);
  adjs[s].push(e);
  inDegree[e] += 1;
}
const q = [];

inDegree.forEach((v, i) => {
  if (i > 0 && v === 0) {
    q.push(i);
  }
});
const result = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  if (q.length === 0) {
    // cycle
    break;
  }
  const next = q.shift();

  result[i] = next;
  adjs[next].forEach(v => {
    inDegree[v] -= 1;
    if (inDegree[v] === 0) {
      q.push(v);
    }
  });
}
result.shift();
console.log(result.join(' '));
