const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const iceberg = [];

for (let i = 1; i <= n; i++) {
  iceberg.push(input[i].split(" ").map(Number));
}

let decArr = Array(n)
  .fill(0)
  .map(_ => Array(m).fill(0));

let chunkCount = 0;
let year = 0;
let sum = iceberg.reduce((sum, v1) => {
  return (
    sum +
    v1.reduce((acc, v2) => {
      return acc + v2;
    }, 0)
  );
}, 0);

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function checkRange(x, y, n, m) {
  return 0 <= x && x < n && 0 <= y && y < m;
}

function getChunkCount() {
  let count = 0;
  const visited = Array(n)
    .fill(0)
    .map(_ => Array(m).fill(false));

  function bfs(x, y) {
    const q = [];
    q.push([x, y]);

    while (q.length) {
      const [cx, cy] = q.shift();

      for (let i = 0; i < dx.length; i++) {
        const nx = dx[i] + cx;
        const ny = dy[i] + cy;

        if (!checkRange(nx, ny, n, m)) continue;
        if (iceberg[nx][ny] === 0) continue;
        if (visited[nx][ny]) continue;

        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j]) continue;
      if (iceberg[i][j] === 0) continue;

      visited[i][j] = true;
      bfs(i, j);
      count += 1;
    }
  }
  return count;
}

while (chunkCount < 2 && sum > 0) {
  ///
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ///
      const item = iceberg[i][j];
      let zeroCount = 0;
      if (item !== 0) {
        ///
        for (let k = 0; k < 4; k++) {
          const nx = dx[k] + i;
          const ny = dy[k] + j;

          if (!checkRange(nx, ny, n, m)) continue;
          if (iceberg[nx][ny] === 0) zeroCount += 1;
        }
      }
      decArr[i][j] = zeroCount;
    }
  }
  ///
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (iceberg[i][j] < decArr[i][j]) {
        sum -= iceberg[i][j];
        iceberg[i][j] = 0;
      } else {
        sum -= decArr[i][j];
        iceberg[i][j] -= decArr[i][j];
      }
    }
  }
  // bfs
  year += 1;

  chunkCount = getChunkCount();
}
if (chunkCount < 2) {
  console.log(0);
} else {
  console.log(year);
}
