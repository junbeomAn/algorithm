const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const adjs = Array(n + 1)
  .fill(0)
  .map(_ => Array());

for (let i = 1; i <= m; i++) {
  const [s, e, c] = input[i].split(' ').map(Number);
  adjs[s].push([e, c]);
  adjs[e].push([s, c]);
}
const [start, end] = input[m + 1].split(' ').map(Number);

let left = 0;
let right = 1000000000;

let mid = Math.floor((left + right) / 2);
let res = -Infinity;

function bfs(w, s, e) {
  const q = [];
  const visited = Array(n + 1).fill(false);
  visited[s] = true;
  q.push(s);

  while (q.length) {
    const c = q.shift();

    if (c === e) {
      return true;
    }

    adjs[c].forEach(n => {
      const [next, capacity] = n;
      if (visited[next]) return;
      if (w > capacity) return;

      visited[next] = true;
      q.push(next);
    });
  }
  return false;
}

while (left <= right) {
  mid = Math.floor((left + right) / 2);
  const reach = bfs(mid, start, end);
  if (reach) {
    left = mid + 1;
    res = Math.max(res, mid);
  } else {
    right = mid - 1;
  }
}

console.log(res);
