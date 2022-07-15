const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const map = input.slice(1);
let max = -Infinity;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const visitChar = Array(26).fill(false);

function checkRange(x, y, n, m) {
  return 0 <= x && x < n && (0 <= y) & (y < m);
}

function dfs(L, x, y) {
  max = Math.max(L, max);

  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (!checkRange(nx, ny, n, m)) continue;
    const index = map[nx][ny].charCodeAt();
    if (visitChar[index]) continue;

    visitChar[index] = true;
    dfs(L + 1, nx, ny);
    visitChar[index] = false;
  }
}
const ci = map[0][0].charCodeAt();
visitChar[ci] = true;
dfs(1, 0, 0);

console.log(max);
