var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const seats = input;
const picked = Array(5)
  .fill(0)
  .map(() => Array(5).fill(false));

function isSevenPrincess(pcs) {
  const dasom = pcs.filter(([x, y]) => seats[x][y] === "S").length;
  return dasom >= 4;
}
// 25C7 중에 조건만족하는것
let cnt = 0;
const set = new Set();

function combi(pcs, n) {
  if (pcs.length === 7) {
    const pos = pcs.map((num) => [Math.floor(num / 5), num % 5]);
    if (isSevenPrincess(pos) && bfs(pos)) {
      cnt += 1;
    }
    return;
  }

  if (n === 25) {
    return;
  }

  for (let i = n; i < 25; i++) {
    combi(pcs.concat(i), i + 1);
  }
}
combi([], 0);
console.log(cnt);

function bfs(pcs) {
  pcs.forEach(([x, y]) => {
    picked[x][y] = true;
  });

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const [sx, sy] = pcs[0];

  picked[sx][sy] = false;
  const stack = [pcs[0]];
  let cnt = 0;

  while (stack.length) {
    const [cx, cy] = stack.shift();

    cnt += 1;

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + cx;
      const ny = dy[i] + cy;
      if (!(0 <= nx && nx < 5 && 0 <= ny && ny < 5)) continue;
      if (!picked[nx][ny]) continue;

      picked[nx][ny] = false;
      stack.push([nx, ny]);
    }
  }

  pcs.forEach(([x, y]) => {
    picked[x][y] = false;
  });
  return cnt === 7;
}
