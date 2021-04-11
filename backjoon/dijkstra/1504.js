var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, E] = input[0].split(" ").map(Number);

let adjs = new Array(N + 1).fill(null).map((_) => new Array());
let route = [];
const station = input[E + 1].split(" ").map(Number);
let reachable = true;

for (let i = 1; i < E + 1; i++) {
  const [depart, arrive, distance] = input[i].split(" ").map(Number);
  adjs[depart].push([arrive, distance]);
  adjs[arrive].push([depart, distance]);
}

const [d1, d2] = [dijkstra(station[0]), dijkstra(station[1])];
const res = Math.min(
  d1[1] + d1[station[1]] + d2[N],
  d2[1] + d2[station[0]] + d1[N]
);

if (res >= Number.MAX_SAFE_INTEGER) {
  console.log(-1);
} else {
  console.log(res);
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

function dijkstra(start) {
  let dist = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  let q = [];

  dist[start] = 0;

  heapPush(q, { currNode: start, w: 0 });

  while (q.length) {
    const node = heapPop(q);
    const { currNode, w } = node;

    if (dist[currNode] < w) {
      continue;
    }

    adjs[currNode].forEach((e) => {
      const [arrive, distance] = e;

      if (dist[arrive] > dist[currNode] + distance) {
        dist[arrive] = dist[currNode] + distance;
        heapPush(q, { currNode: arrive, w: dist[arrive] });
      }
    });
  }
  return dist;
}
