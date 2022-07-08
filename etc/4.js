function checkRange(x, y, n, m) {
  return 0 <= x && x <= n && 0 <= y && y <= m;
}

function solution(grid, k) {
  const n = grid.length - 1;
  const m = grid[0].length - 1;

  const river = '#';
  const forest = 'F';
  const land = '.';
  const stack = [];

  let minSleep = Infinity;

  function bfs(x, y) {
    const q = [];
    const visited = Array(n + 1)
      .fill(0)
      .map((_) => Array(m + 1).fill(false));
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    q.push([x, y, k, 0]);
    visited[x][y] = true;

    while (q.length) {
      let [cx, cy, remain, sleep] = q.shift();

      stack.push([cx, cy, remain, sleep]);
      if (remain === 0) {
        if (cx === n && cy === m) {
          minSleep = Math.min(minSleep, sleep);
        } else {
          // stack
          let [px, py, pRemain, pSleep] = stack.pop();
          while (stack.length && grid[px][py] !== land) {
            visited[px][py] = false;
            [px, py, pRemain, pSleep] = stack.pop();
          }
          console.log(px, py);
          remain = k;
          sleep = pSleep + 1;
        }
      }
      if (cx === n && cy === m) {
        minSleep = Math.min(minSleep, sleep);
      }

      for (let i = 0; i < dx.length; i++) {
        const nx = dx[i] + cx;
        const ny = dy[i] + cy;

        if (!checkRange(nx, ny, n, m)) continue;
        if (visited[nx][ny]) continue;
        if (grid[nx][ny] === river) continue;

        q.push([nx, ny, remain - 1, sleep]);
        visited[nx][ny] = true;
      }
    }
  }
  bfs(0, 0);
  return minSleep;
}

console.log(solution(['..FF', '###F', '###.'], 4));
console.log('----------');
console.log(solution(['..FF', '###F', '###.'], 5));
console.log('----------');
console.log(
  solution(
    [
      '.F.FFFFF.F',
      '.########.',
      '.########F',
      '...######F',
      '##.######F',
      '...######F',
      '.########F',
      '.########.',
      '.#...####F',
      '...#......',
    ],
    6
  )
);
