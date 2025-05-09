var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const rels = input.slice(1).map((r) => r.split(" ").map(Number));
const adjs = Array(N)
  .fill(0)
  .map(() => Array());
const visited = Array(N).fill(false);

rels.forEach(([a, b]) => {
  adjs[a].push(b);
  adjs[b].push(a);
});

let answer = 0;

function dfs(n, deps) {
  if (deps === 4) {
    answer = 1;
    return;
  }

  if (answer === 0) {
    for (let i = 0; i < adjs[n].length; i++) {
      const next = adjs[n][i];

      if (!visited[next]) {
        visited[next] = true;
        dfs(next, deps + 1);
        visited[next] = false;
      }
    }
  }
}
for (let i = 0; i < N; i++) {
  if (answer === 0) {
    visited[i] = true;
    dfs(i, 0);
    visited[i] = false;
  } else {
    break;
  }
}

console.log(answer);
