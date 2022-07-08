const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const [S, E] = input[1].split(" ").map(Number);
const m = +input[2];
const adjs = Array(n + 1)
  .fill(0)
  .map(_ => Array());

for (let i = 3; i < 3 + m; i++) {
  const [s, e] = input[i].split(" ").map(Number);
  adjs[s].push(e);
  adjs[e].push(s);
}
const visited = Array(n + 1).fill(false);
let res = -1;

function dfs(L, count) {
  if (L === E) {
    if (res === -1) {
      res = count;
    } else {
      res = Math.min(count, res);
    }
    return;
  }

  adjs[L].forEach(next => {
    if (visited[next]) return;
    visited[next] = true;
    dfs(next, count + 1);
    visited[next] = false;
  });
}

visited[S] = true;
dfs(S, 0);

console.log(res);
