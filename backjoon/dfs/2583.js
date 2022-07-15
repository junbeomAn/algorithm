const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n, _] = input[0].split(' ').map(Number);
const board = Array(m)
  .fill(0)
  .map((_) => Array(n).fill(0));
const visited = Array(m)
  .fill(0)
  .map((_) => Array(n).fill(false));
let count = 0;

for (let i = 1; i < input.length; i++) {
  const [sy, sx, ey, ex] = input[i].split(' ').map(Number);
  for (let a = sx; a < ex; a++) {
    for (let b = sy; b < ey; b++) {
      board[a][b] = 1;
    }
  }
}
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let maxArea = 0;
const res = [];

function checkRange(x, y, m, n) {
  return 0 <= x && x < m && 0 <= y && y < n;
}

function dfs(x, y) {
  maxArea += 1;

  for (let i = 0; i < dx.length; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;

    if (!checkRange(nx, ny, m, n)) continue;
    if (visited[nx][ny]) continue;
    if (board[nx][ny] === 1) continue;

    visited[nx][ny] = true;
    dfs(nx, ny);
  }
}

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j]) continue;
    if (board[i][j] === 1) continue;

    visited[i][j] = true;
    maxArea = 0;
    dfs(i, j);
    res.push(maxArea);
    count += 1;
  }
}

console.log(count);
console.log(res.sort((a, b) => a - b).join(' '));
