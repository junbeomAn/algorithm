/*
1. 노드별 인접노드 구성.
2. q 써서 bfs 하는데 현재까지 거리 저장.
*/
function solution(n, edge) {
  let answer = 0;
  let adjsArr = [];
  let visited = [];
  let dist;
  let max = -Infinity;
  let count = 0;

  for (let e of edge) {
    const [start, end] = e;

    if (!adjsArr[start]) {
      adjsArr[start] = [end];
    } else {
      adjsArr[start].push(end);
    }
    if (!adjsArr[end]) {
      adjsArr[end] = [start];
    } else {
      adjsArr[end].push(start);
    }
  }
  dist = new Array(adjsArr.length).fill(0);

  function bfs(start) {
    let q = [];
    q.push([start, 0]);
    visited[start] = true;

    while (q.length) {
      const [node, currDist] = q.shift();
      dist[node] = Math.max(dist[node], currDist);

      const adjs = adjsArr[node];

      for (let n of adjs) {
        if (!visited[n]) {
          visited[n] = true;
          q.push([n, currDist + 1]);
        }
      }
    }
  }
  bfs(1);
  max = Math.max(...dist);
  for (let i = 1; i < dist.length; i++) {
    if (max === dist[i]) count++;
  }
  return count;
}
