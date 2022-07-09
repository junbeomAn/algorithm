const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Q {
  constructor() {
    this.q = [];
    this.curr = 0;
  }
  enqueue(v) {
    return this.q.push(v);
  }
  dequeue() {
    if (this.q.length === this.curr) return;

    return this.q[this.curr++];
  }
  front() {
    return this.q[this.curr];
  }
  get length() {
    return this.q.length - this.curr;
  }
}

const [m, n, h] = input[0].split(" ").map(Number);
const tomato = [];

for (let i = 0; i < h; i++) {
  const s = 1 + i * n;
  const level = [];
  for (let j = s; j < 1 + (i + 1) * n; j++) {
    level.push(input[j].split(" ").map(Number));
  }
  tomato.push(level);
}

let notRiped = 0;
let res = -1;
const q = new Q();
const visited = Array(h)
  .fill(0)
  .map(_ =>
    Array(n)
      .fill(0)
      .map(_ => Array(m).fill(false))
  );

const dx = [1, 0, -1, 0, 0, 0];
const dy = [0, 1, 0, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (tomato[i][j][k] === 0) {
        notRiped += 1;
      } else if (tomato[i][j][k] === 1) {
        q.enqueue([i, j, k, 0]); // 좌표, 일수
        visited[i][j][k] = true;
      }
    }
  }
}

function checkRange(x, y, z, m, n, h) {
  return 0 <= x && x < h && 0 <= y && y < n && 0 <= z && z < m;
}

if (notRiped) {
  while (q.length) {
    const [x, y, z, count] = q.dequeue();

    res = count;

    for (let i = 0; i < dx.length; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      const nz = dz[i] + z;

      if (!checkRange(nx, ny, nz, m, n, h)) continue;
      if (tomato[nx][ny][nz] !== 0) continue;
      if (visited[nx][ny][nz]) continue;

      tomato[nx][ny][nz] = 1;
      notRiped -= 1;
      visited[nx][ny][nz] = true;
      q.enqueue([nx, ny, nz, count + 1]);
    }
  }
  if (notRiped <= 0) {
    console.log(res);
  } else {
    console.log(-1);
  }
} else {
  console.log(0);
}
