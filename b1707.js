var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputs = input.slice(1).map((r) => r.split(" ").map(Number));
let i = 0;

while (i < inputs.length) {
  const [V, E] = inputs[i++];
  const adjs = Array(V + 1)
    .fill(0)
    .map(() => Array());
  const visited = Array(V + 1).fill(false);
  const color = Array(V + 1).fill("");

  for (let j = i; j < i + E; j++) {
    const [s, e] = inputs[j];
    adjs[s].push(e);
    adjs[e].push(s);
  }

  function bfs(v) {
    const stack = [v];
    visited[v] = true;
    color[v] = "r";

    while (stack.length) {
      const curr = stack.shift();

      for (const next of adjs[curr]) {
        if (color[next] === color[curr]) {
          return false;
        }
        if (visited[next]) continue;
        color[next] = color[curr] === "r" ? "b" : "r";
        visited[next] = true;
        stack.push(next);
      }
    }
    return true;
  }
  let res;

  for (let k = 1; k <= V; k++) {
    if (visited[k]) continue;

    res = bfs(k);
    if (!res) {
      break;
    }
  }
  console.log(res ? "YES" : "NO");
  i += E;
}
