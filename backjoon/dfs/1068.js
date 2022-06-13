const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, rels, remove] = input;

const tree = Array(+N)
  .fill(0)
  .map(_ => Array());

const pNodes = rels.split(" ").map(Number);

pNodes.forEach((pNode, i) => {
  if (pNode === -1) {
    return;
  }
  tree[pNode].push(i);
});

function dfs(nTree, removeNode) {
  nTree[removeNode].forEach(node => {
    dfs(nTree, node);
  });
  nTree[removeNode] = null;
}

dfs(tree, +remove);

if (pNodes[+remove] === -1) {
  console.log(0);
} else {
  const i = tree[pNodes[+remove]].indexOf(+remove);
  tree[pNodes[+remove]].splice(i, 1);

  console.log(
    tree.reduce(
      (acc, nodes) => (nodes && nodes.length === 0 ? acc + 1 : acc),
      0
    )
  );
}
