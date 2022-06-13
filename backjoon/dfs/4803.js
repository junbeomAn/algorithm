const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const testcases = [];
let i = 0;
let nextIndex = 0;

while (1) {
  const [a, b] = input[i].split(' ').map(Number);
  if (a === 0 && b === 0) break;

  if (i === nextIndex) {
    i += 1;
    let k = 0;
    const testcase = [a];
    while (k < b) {
      testcase.push(input[i].split(' ').map(Number));
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
    .map((_) => Array());
  edges.forEach(([s, e]) => {
    adjs[s].push(e);
    adjs[e].push(s);
  });
  const visited = Array(N + 1).fill(false);
  const parent = Array(N + 1).fill(0);

  function bfs(start) {
    const q = [];
    q.push(start);
    visited[start] = true;

    while (q.length) {
      const node = q.shift();

      adjs[node].forEach((nextNode) => {
        if (visited[nextNode] && parent[node] !== nextNode) {
          cycle = true;
          return;
        }
        if (visited[nextNode]) return;

        visited[nextNode] = true;
        parent[nextNode] = node;
        q.push(nextNode);
      });
    }
  }

  for (let i = 1; i <= N; i++) {
    cycle = false;
    if (visited[i]) continue;
    visited[i] = true;
    bfs(i);
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
