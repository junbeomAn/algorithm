const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [W, H] = input[0].split(' ').map(Number);
const board = [];

for (let i = 1; i < input.length; i++) {
  board.push(input[i].split(''));
}

let cPos = [];

board.forEach((line, i) => {
  line.forEach((v, j) => {
    if (v === 'C') {
      cPos.push([i, j]);
    }
  });
});

function checkRange(x, y, n, m) {
  return 0 <= x && x < n && 0 <= y && y < m;
}

function bfs(x, y) {
  const mirror = 0;
  const dir = [0, 1, 2, 3];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const countArr = Array(H)
    .fill(0)
    .map(_ => Array(W).fill(Infinity));

  // 여기부터 시작.
  const q = [];
  countArr[x][y] = 0;

  for (let i = 0; i < dir.length; i++) {
    // 초기 dir 에 따라 네번 수행해야함.

    const sx = dx[i] + x;
    const sy = dy[i] + y;

    if (!checkRange(sx, sy, H, W)) continue;
    if (board[sx][sy] === '*') continue;

    countArr[sx][sy] = 0;
    q.push([sx, sy, mirror, dir[i]]);
  }

  while (q.length) {
    const [cx, cy, mirrorCount, cDir] = q.shift();

    for (let j = 0; j < dx.length; j++) {
      // get nx, ny
      // checkrange
      // check visit
      // check wall
      // check if dir index diff is 2 -> horizontal -> no mirror count increase / not -> vertical -> mirror count increase
      // push new nx, ny, mirrorcount, cDir
      const nx = dx[j] + cx;
      const ny = dy[j] + cy;
      const isVerticalDir = cDir !== j;
      const nextMirrorCount = isVerticalDir ? mirrorCount + 1 : mirrorCount;

      if (!checkRange(nx, ny, H, W)) continue;
      if (board[nx][ny] === '*') continue;

      if (countArr[nx][ny] >= nextMirrorCount) {
        countArr[nx][ny] = nextMirrorCount;
        q.push([nx, ny, nextMirrorCount, j]);
      }
    }
  }

  return countArr[cPos[1][0]][cPos[1][1]];
}

console.log(bfs(cPos[0][0], cPos[0][1]));
