var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((row) => row.split(" ").map(Number));
let visited = Array(M)
  .fill(0)
  .map(() => Array(N).fill(false));

// 1111 남동북서
function bfs(x, y, visited) {
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  let size = 0;

  const localVisited =
    visited ||
    Array(M)
      .fill(0)
      .map(() => Array(N).fill(false));

  const q = [];
  q.push([x, y]);
  localVisited[x][y] = true;

  while (q.length) {
    const [cx, cy] = q.shift();

    const wall = board[cx][cy].toString(2).padStart(4, "0").split("");

    size += 1;
    for (let i = 0; i < 4; i++) {
      if (wall[wall.length - 1 - i] === "0") {
        // console.log(cx, cy, board[cx][cy], wall, i);

        const nx = dx[i] + cx;
        const ny = dy[i] + cy;
        // checkRange
        // localVisited
        if (!(0 <= nx && nx < M && 0 <= ny && ny < N)) continue;
        if (localVisited[nx][ny]) continue;

        localVisited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
  return size;
}
let rmCnt = 0;
let maxSize = 0;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      maxSize = Math.max(maxSize, bfs(i, j, visited));
      rmCnt += 1;
    }
  }
}

let combinedSize = 0;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < 4; k++) {
      if (board[i][j] - 2 ** k >= 0) {
        const wall = (board[i][j] - 2 ** k)
          .toString(2)
          .padStart(4, "0")
          .split("");
        board[i][j] -= 2 ** k;
        if (wall[wall.length - 1 - k] === "0") {
          combinedSize = Math.max(combinedSize, bfs(i, j));
        }
        board[i][j] += 2 ** k;
      }
    }
  }
}

console.log(rmCnt);
console.log(maxSize);
console.log(combinedSize);
