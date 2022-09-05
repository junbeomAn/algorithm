const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [r, c] = input[0].split(' ').map(Number);

function checkRange(x, y, r, c) {
  return 0 <= x && x < r && 0 <= y && y < c;
}

function bfs() {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const board = input.slice(1).map(line => line.split(''));
  const jVisit = Array(r)
    .fill(0)
    .map(_ => Array(c).fill(false));
  const fDist = Array(r)
    .fill(0)
    .map(_ => Array(c).fill(-1));
  const jq = [];
  const fq = [];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] === 'J') {
        jq.push([i, j, 0]);
        jVisit[i][j] = true;
      }
      if (board[i][j] === 'F') {
        fq.push([i, j, 0]);
        fDist[i][j] = 0;
      }
    }
  }

  while (fq.length) {
    const [cx, cy, fMove] = fq.shift();

    for (let i = 0; i < dx.length; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (!checkRange(nx, ny, r, c)) continue;
      if (fDist[nx][ny] !== -1) continue;
      if (['#'].includes(board[nx][ny])) continue;

      fDist[nx][ny] = fMove + 1;
      fq.push([nx, ny, fMove + 1]);
    }
  }

  while (jq.length) {
    const [cx, cy, jMove] = jq.shift();

    for (let i = 0; i < dx.length; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (!checkRange(nx, ny, r, c)) {
        return jMove + 1;
      }
      if (jVisit[nx][ny]) continue;
      if (['#', 'F'].includes(board[nx][ny])) continue;
      if (fDist[nx][ny] !== -1 && jMove + 1 >= fDist[nx][ny]) continue;

      jVisit[nx][ny] = true;
      jq.push([nx, ny, jMove + 1]);
    }
  }
  return 'IMPOSSIBLE';
}
console.log(bfs());
