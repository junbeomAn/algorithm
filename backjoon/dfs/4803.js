// const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

input = `6 3
1 2
2 3
3 4
6 5
1 2
2 3
3 4
4 5
5 6
6 6
1 2
2 3
1 3
4 5
5 6
6 4
0 0`.split("\n");

const testcases = [];
let i = 0;
let nextIndex = 0;

while (1) {
  const [a, b] = input[i].split(" ").map(Number);
  if (a === 0 && b === 0) break;

  if (i === nextIndex) {
    i += 1;
    let k = 0;
    const testcase = [a];
    while (k < b) {
      testcase.push(input[i].split(" ").map(Number));
      i += 1;
      k += 1;
    }
    testcases.push(testcase);
    nextIndex += b + 1;
  }
}
testcases.forEach((testcase, i) => {
  const N = testcase[0];
  const edges = testcase.slice(1);
  let count = 0;
  let cycle = false;
  const adjs = Array(N + 1)
    .fill(0)
    .map(_ => Array());
  edges.forEach(([s, e]) => {
    adjs[s].push(e);
  });
  const visited = Array(N + 1).fill(false);

  function dfs(node) {
    adjs[node].forEach(nextNode => {
      if (visited[nextNode]) {
        cycle = true;
        return;
      }

      visited[nextNode] = true;
      dfs(nextNode);
    });
  }
  for (let i = 1; i <= N; i++) {
    cycle = false;
    if (visited[i]) continue;

    dfs(i);
    if (cycle) continue;
    count += 1;
  }
  printMessageWithCount(count, i);
});

function printMessageWithCount(count, i) {
  if (count > 1) {
    console.log(`Case ${i + 1}: A forest of ${count} trees.`);
  } else if (count === 1) {
    console.log(`Case ${i + 1}: There is one tree.`);
  } else {
    console.log(`Case ${i + 1}: No trees.`);
  }
}
