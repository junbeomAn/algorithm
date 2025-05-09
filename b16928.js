var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const bridges = input.slice(1).map((r) => r.split(" ").map(Number));
const edges = Array(101).fill(0);

for (const [s, e] of bridges) {
  edges[s] = e;
}

let start = 1;
const stack = [];
const visited = Array(101).fill(false);

stack.push([start, 0]);
visited[1] = true;

while (stack.length) {
  let [curr, move] = stack.shift();

  if (curr === 100) {
    console.log(move);
    break;
  }
  if (edges[curr] > 0) {
    const moved = edges[curr];
    visited[moved] = true;
    curr = moved;
  }

  for (let i = 1; i <= 6; i++) {
    const next = curr + i;

    if (next > 100) continue;
    if (visited[next]) continue;

    stack.push([next, move + 1]);
    visited[next] = true;
  }
}
