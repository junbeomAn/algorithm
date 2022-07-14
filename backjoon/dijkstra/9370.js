const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let i = 1;

while (i < input.length) {
  const targets = [];

  const [v, e, t] = input[i++].split(' ').map(Number); // 1
  const [s, g, h] = input[i++].split(' ').map(Number); // 2
  const adjs = Array(v + 1)
    .fill(null)
    .map((_) => Array());

  for (let j = 0; j < e; j++) {
    const [s, e, cost] = input[i + j].split(' ').map(Number);

    adjs[s].push([e, cost]);
    adjs[e].push([s, cost]);
  }
  i += e;
  for (let j = 0; j < t; j++) {
    targets.push(+input[i + j]);
  }

  i += t;

  function dijkstra(s) {
    const dist = Array(v + 1).fill(100000000);
    const q = [];

    dist[s] = 0;
    heapPush(q, { node: s, w: 0 });

    while (q.length) {
      const { node, w } = heapPop(q);

      if (dist[node] < w) {
        continue;
      }

      adjs[node].forEach((adj) => {
        const [arrive, distance] = adj;

        if (dist[arrive] > w + distance) {
          dist[arrive] = w + distance;
          heapPush(q, { node: arrive, w: dist[arrive] });
        }
      });
    }
    return dist;
  }

  const ds = dijkstra(s);
  const dg = dijkstra(g);
  const dh = dijkstra(h);

  const result = targets.filter((t) => {
    if (ds[g] + dg[h] + dh[t] === ds[t] || ds[h] + dh[g] + dg[t] === ds[t]) {
      return true;
    }
    return false;
  });
  console.log(
    result
      .sort((a, b) => a - b)
      .join(' ')
      .trim()
  );
}

function heapPush(q, node) {
  q.push(node);
  let nodeIndex = q.length - 1;
  let parentIndex = Math.floor((nodeIndex - 1) / 2);

  while (nodeIndex > 0 && q[nodeIndex].w < q[parentIndex].w) {
    [q[nodeIndex], q[parentIndex]] = [q[parentIndex], q[nodeIndex]];
    nodeIndex = parentIndex;
    parentIndex = Math.floor((nodeIndex - 1) / 2);
  }
}

function heapPop(q) {
  const ret = q[0];
  let compare = q.pop();

  if (q.length === 0) {
    return ret;
  }
  q[0] = compare;

  let index = 0;
  let leftChild;
  let rightChild;
  let minIndex = 0;
  let stop = false;

  while (!stop) {
    leftChild = q[index * 2 + 1];
    rightChild = q[index * 2 + 2];

    if (leftChild && rightChild) {
      if (leftChild.w <= rightChild.w) {
        minIndex = index * 2 + 1;
      } else {
        minIndex = index * 2 + 2;
      }
    } else if (leftChild) {
      minIndex = index * 2 + 1;
    } else {
      stop = true;
    }

    if (index !== minIndex && q[index].w > q[minIndex].w) {
      [q[minIndex], q[index]] = [q[index], q[minIndex]];
      index = minIndex;
    } else {
      stop = true;
    }
  }
  return ret;
}
