const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, ...remain] = input;

const adjs = Array(Number(N) + 1)
  .fill(0)
  .map(_ => Array());

remain.forEach(rel => {
  const [s, e, c] = rel.split(" ").map(Number);
  adjs[s].push([e, c]);
  adjs[e].push([s, c]);
});

function bfs(start) {
  const visited = Array(+N + 1).fill(false);
  const q = [];
  let farthest = [1, 0];

  q.push([start, 0]);
  visited[start] = true;

  while (q.length) {
    const [node, cost] = q.shift();

    if (farthest[1] < cost) {
      farthest = [node, cost];
    }

    adjs[node].forEach(([next, newCost]) => {
      if (visited[next]) return;
      visited[next] = true;
      q.push([next, cost + newCost]);
    });
  }
  return farthest;
}

const [farthestNode, cost] = bfs(1);
const [farthestNodeTarget, costToTarget] = bfs(farthestNode);

console.log(costToTarget);
