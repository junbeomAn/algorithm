const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// union find

const N = +input[0];
const M = +input[1];
const rels = input.slice(2, 2 + N).map(line => line.split(' ').map(Number));
const paths = input[2 + N].split(' ').map(Number);
const p = Array(N + 1)
  .fill(0)
  .map((_, i) => i);

function getParent(parent, a) {
  if (parent[a] === a) return a;
  return (parent[a] = getParent(parent, parent[a]));
}

function union(parent, a, b) {
  const pa = getParent(parent, a);
  const pb = getParent(parent, b);
  if (pa < pb) {
    parent[pb] = pa;
  } else {
    parent[pa] = pb;
  }
}

function checkSameParent(parent, a, b) {
  const pa = getParent(parent, a);
  const pb = getParent(parent, b);

  return pa === pb;
}
for (let i = 0; i < rels.length; i++) {
  for (let j = 0; j < rels[i].length; j++) {
    const rel = rels[i][j];
    if (rel === 1) {
      union(p, i + 1, j + 1);
    }
  }
}
let res = 'YES';

if (M !== 1) {
  for (let i = 0; i < paths.length - 1; i++) {
    const [a, b] = [paths[i], paths[i + 1]];
    if (!checkSameParent(p, a, b)) {
      res = 'NO';
      break;
    }
  }
}
console.log(res);
