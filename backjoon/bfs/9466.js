const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = +input[0];
let i = 1;

while (i < input.length) {
  const n = +input[i++];
  const S = input[i++].split(' ').map(Number);
  let count = 0;
  const visited = Array(n + 1).fill(false);
  let paths = [];

  for (let j = 1; j <= n; j++) {
    function dfs(start) {
      let c = start;
      paths = [];
      while (!visited[c]) {
        visited[c] = true;

        const next = S[c - 1];
        paths.push(c);
        c = next;
      }
      const idx = paths.indexOf(c);
      const nonCycle = idx === -1 ? paths.length : idx;

      count += nonCycle;
    }
    dfs(j);
  }

  console.log(count);
}
