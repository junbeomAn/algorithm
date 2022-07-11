const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
let board = [];
for (let i = 1; i <= n; i++) {
  board.push(input[i].split(" ").map(Number));
}

let newBoard = Array(n)
  .fill(0)
  .map(_ => Array(m).fill(0));
let cheeseCount = 0;
let lastCheeseCount = 0;
let totalCount = 0;

// 테두리 x 초기화, cheese count 세기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (i === 0 || i === n - 1 || j === 0 || j === m - 1) {
      board[i][j] = "x";
    }
    if (board[i][j] === 1) {
      cheeseCount += 1;
    }
  }
}

function copy(prev, next) {
  for (let i = 0; i < prev.length; i++) {
    for (let j = 0; j < prev[i].length; j++) {
      prev[i][j] = next[i][j];
    }
  }
  return prev;
}

function checkRange(x, y, n, m) {
  return 0 <= x && x < n && 0 <= y && y < m;
}

function bfs(x, y) {
  const q = [];
  const visited = Array(n)
    .fill(0)
    .map(_ => Array(m).fill(false));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  q.push([x, y]);
  visited[x][y] = true;

  while (q.length) {
    const [cx, cy] = q.shift();
    // console.log(cx, cy, board[cx][cy]);
    if (board[cx][cy] === "x") {
      newBoard[x][y] = 0;
      cheeseCount -= 1;
      return;
    }
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + cx;
      const ny = dy[i] + cy;

      if (!checkRange(nx, ny, n, m)) continue;
      if (board[nx][ny] === 1) continue;
      if (visited[nx][ny]) continue;

      visited[nx][ny] = true;
      q.push([nx, ny]);
    }
  }
}

while (cheeseCount > 0) {
  newBoard = copy(newBoard, board);
  lastCheeseCount = cheeseCount;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        bfs(i, j);
      }
    }
  }

  board = copy(board, newBoard);
  totalCount += 1;
}
console.log(totalCount);
console.log(lastCheeseCount);
