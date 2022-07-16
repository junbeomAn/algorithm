const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let i = 1;

function checkRange(x, y, n) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

while (i < input.length) {
  const n = +input[i++];
  const [sx, sy] = input[i++].split(' ').map(Number);
  const [ex, ey] = input[i++].split(' ').map(Number);
  let minMove = Infinity;

  function bfs(x, y) {
    const visited = Array(n)
      .fill(0)
      .map((_) => Array(n).fill(false));
    const dx = [-2, -2, -1, 1, 2, 2, -1, 1];
    const dy = [1, -1, 2, 2, -1, 1, -2, -2];
    const q = [];

    q.push([x, y, 0]);
    visited[x][y] = true;
    while (q.length) {
      const [cx, cy, move] = q.shift();

      if (cx === ex && cy === ey) {
        minMove = Math.min(minMove, move);
      }
      for (let i = 0; i < dx.length; i++) {
        const nx = dx[i] + cx;
        const ny = dy[i] + cy;
        if (!checkRange(nx, ny, n)) continue;
        if (visited[nx][ny]) continue;

        visited[nx][ny] = true;
        q.push([nx, ny, move + 1]);
      }
    }
  }
  bfs(sx, sy);
  console.log(minMove);
}
