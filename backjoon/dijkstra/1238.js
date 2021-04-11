var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, X] = input[0].split(" ").map(Number);

let outRel = new Array(N + 1).fill(null).map((_) => new Array());
let inRel = new Array(N + 1).fill(null).map((_) => new Array());

for (let i = 1; i < M + 1; i++) {
  const [start, end, cost] = input[i].split(" ").map(Number);
  outRel[start].push([end, cost]);
  inRel[end].push([start, cost]);
}

function heapPush(q, node) {
  q.push(node);
  let index = q.length - 1;
  let parentIndex = Math.floor((index - 1) / 2);

  while (index > 0 && q[index].w < q[parentIndex].w) {
    [q[index], q[parentIndex]] = [q[parentIndex], q[index]];
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
  }
}

function heapPop(q) {
  const ret = q[0];

  let index = 0;
  let changeIndex = 0;
  let stop = false;

  let leftChild;
  let rightChild;

  q[0] = q[q.length - 1];
  q.pop();

  if (q.length === 0) {
    return ret;
  }

  while (!stop) {
    leftChild = q[index * 2 + 1];
    rightChild = q[index * 2 + 2];

    if (leftChild && rightChild) {
      if (leftChild.w <= rightChild.w) {
        changeIndex = index * 2 + 1;
      } else {
        changeIndex = index * 2 + 2;
      }
    } else if (leftChild && !rightChild) {
      changeIndex = index * 2 + 1;
    } else {
      stop = true;
    }
    if (changeIndex !== index && q[changeIndex].w < q[index].w) {
      [q[changeIndex], q[index]] = [q[index], q[changeIndex]];
      index = changeIndex;
    } else {
      stop = true;
    }
  }

  return ret;
}

function dijkstra(start, adjs) {
  let dist = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  let pq = [];

  dist[start] = 0;
  pq.push({ currNode: start, w: 0 });

  while (pq.length) {
    const { currNode, w } = heapPop(pq);

    if (dist[currNode] < w) {
      continue;
    }

    adjs[currNode].forEach((e) => {
      const [end, cost] = e;
      if (dist[end] > dist[currNode] + cost) {
        dist[end] = dist[currNode] + cost;
        heapPush(pq, { currNode: end, w: dist[end] });
      }
    });
  }

  return dist;
}

const [dist1, dist2] = [dijkstra(X, outRel), dijkstra(X, inRel)];
let max = Number.MIN_SAFE_INTEGER;

for (let i = 1; i < N + 1; i++) {
  max = Math.max(dist1[i] + dist2[i], max);
}
console.log(max);
