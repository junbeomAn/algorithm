const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const visited = Array(n)
  .fill(0)
  .map(_ => Array(m).fill(false));
const [r, c, d] = input[1].split(" ").map(Number);
let count = 0;
const dx = [-1, 0, 1, 0]; // 0 1 2 3
const dy = [0, 1, 0, -1];
const board = [];

for (let i = 2; i < input.length; i++) {
  board.push(input[i].split(" ").map(Number));
}

function checkRange(x, y, n, m) {
  return 0 <= x && x < n && 0 <= y && y < m;
}

function getDir(dir) {
  if (dir < 0) {
    return 4 + dir;
  }
  return dir % 4;
}

function dfs(dir, x, y) {
  let sub = 0;
  for (let i = 1; i <= 4; i++) {
    const newDir = getDir(dir - i);
    const nx = dx[newDir] + x;
    const ny = dy[newDir] + y;

    if (!checkRange(nx, ny, n, m)) {
      sub += 1;
      continue;
    }
    if (visited[nx][ny]) {
      sub += 1;
      continue;
    }
    if (board[nx][ny] === 1) {
      sub += 1;
      continue;
    }

    sub = 0;
    visited[nx][ny] = true;
    count += 1;
    dfs(newDir, nx, ny);
    break;
  }
  if (sub === 4) {
    const back = getDir(dir - 2);
    const nx = dx[back] + x;
    const ny = dy[back] + y;
    if (board[nx][ny] === 1) {
      return;
    } else {
      // 후진
      dfs(dir, nx, ny);
    }
    return;
  }
}

visited[r][c] = true;
count += 1;

dfs(d, r, c);

console.log(count);
