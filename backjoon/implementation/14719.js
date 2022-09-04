const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [h, w] = input[0].split(' ').map(Number);
const blocks = input[1].split(' ').map(Number);
let res = 0;

function checkRange(v, w) {
  return 0 <= v && v < w;
}

while (h > 0) {
  const visited = Array(w).fill(false);

  for (let i = 0; i < blocks.length; i++) {
    if (visited[i]) continue;
    if (blocks[i] > 0) continue;

    let outofRange = false;
    const q = [];
    let count = 0;

    q.push(i);
    visited[i] = true;
    count += 1;

    while (q.length) {
      const v = q.shift();

      for (const n of [-1, 1]) {
        const nv = v + n;

        if (!checkRange(nv, w)) {
          outofRange = true;
          continue;
        }
        if (visited[nv]) continue;
        if (blocks[nv] > 0) continue;
        visited[nv] = true;
        count += 1;
        q.push(nv);
      }
    }

    if (!outofRange) {
      res += count;
    }
  }

  for (let i = 0; i < blocks.length; i++) {
    blocks[i] -= 1;
  }
  h -= 1;
}

console.log(res);
