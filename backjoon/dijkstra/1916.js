var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

/*
최소 힙 직접 구현
heap 삽입 : 배열 맨 끝에 데이터 붙인 후 부모((index - 1) / 2)와 비교해서 작으면(최소 힙) 위치 상호 교환. 루트 노드까지 반복 실시
heap 삭제 : 삽입 후 가장 작은 노드가 루트에 있기 때문에 루트 노드를 빼내고 가장 오른쪽 아래 마지막 노드를 루트로 넣은 후, 왼쪽자식 오른쪽 자식과 비교하면서 부모 노드가 더 클 경우 위치 교환.

나머지는 일반적인 다익스트라 알고리즘.

다익스트라는 다른 루프에 의해 새로 업데이트 됐을 지도 모르는 해당 노드까지의 최단거리와 이전에 마지막으로 저장한 최단거리를 비교하여 비교적 더 최근에 업데이트 된 거리가 더 짧을 경우 해당 루프는 continue 한다는 점을 주의한다.
*/

const N = +input[0]; // city count
const M = +input[1]; // bus line (edge) count

let adjs = new Array(N + 1).fill(null).map((_) => new Array());
let dist = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
let q = [];
for (let i = 2; i < M + 2; i++) {
  const [depart, arrive, distance] = input[i].split(" ").map(Number);
  adjs[depart].push([arrive, distance]);
}

const [S, E] = input[M + 2].split(" ").map(Number);

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

dist[S] = 0;
heapPush(q, { currNode: S, w: 0 });

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
console.log(dist[E]);
