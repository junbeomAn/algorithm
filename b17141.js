var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const lab = input.slice(1).map((r) => r.split(" ").map(Number));

const empties = [];
const startsSubsets = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (lab[i][j] === 2) {
      empties.push([i, j]);
      lab[i][j] = 0;
    }
  }
}

function dfs(n, starts) {
  if (starts.length === M) {
    startsSubsets.push(starts);
    return;
  }

  for (let i = n; i < empties.length; i++) {
    dfs(i + 1, starts.concat([empties[i]]));
  }
}

function checkAllVisited(visited, currLab) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && currLab[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

dfs(0, []);
let min = Infinity;

for (let i = 0; i < startsSubsets.length; i++) {
  const start = startsSubsets[i];
  const q = [];
  const visited = Array(N)
    .fill(0)
    .map(() => Array(N).fill(false));
  let max = -Infinity;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const copyLab = lab.map((r) => r.slice());

  start.forEach(([x, y]) => {
    q.push([x, y, 0]);
    visited[x][y] = true;
  });

  while (q.length) {
    const [cx, cy, dist] = q.shift();

    max = max < dist ? dist : max;

    for (let i = 0; i < dx.length; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (!(0 <= nx && nx < N && 0 <= ny && ny < N)) continue;
      if (visited[nx][ny]) continue;
      if (copyLab[nx][ny] !== 0) continue;

      visited[nx][ny] = true;
      copyLab[nx][ny] = dist + 1;
      q.push([nx, ny, dist + 1]);
    }
  }

  if (checkAllVisited(visited, copyLab)) {
    min = max < min ? max : min;
  }
}
console.log(min === Infinity ? -1 : min);
