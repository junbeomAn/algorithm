function heapPush (q, node) {
  q.push(node);
  let index = q.length - 1;
  let parentIndex = Math.floor((index - 1) / 2);

  while (index > 0 && q[index][1] < q[parentIndex][1]) {
    [q[index], q[parentIndex]] = [q[parentIndex], q[index]];
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
  }
}

function heapPop (q) {
  const ret = q[0];

  let index = 0;
  let stop = false;
  let child;

  q[0] = q[q.length - 1];
  q.pop();

  if (q.length === 0) {
    return ret;
  }

  while (!stop && q.length > 1) {
    child = index * 2 + 1;
    if (child >= q.length) {
      stop = true;
      continue;
    }
    if (child < q.length - 1 && q[child][1] > q[child + 1][1]) {
      child = child + 1;
    }

    if (child !== index && (q[child][1] < q[index][1])) {
      [q[child], q[index]] = [q[index], q[child]];
      index = child;
    } else {
      stop = true;
    }
  }

  return ret;
}

// SJF 스케줄링 알고리즘 (도착한 것 중에 가장 짧은 것.)
module.exports = function solution (jobs) {
  // 힙 자료구조에 대한 코멘트는 따로 적지 않겠습니다.
  // 시간 복잡도 O(N*logN), 공간 복잡도 N ?

  // 우선 도착한 것이 먼저 실행이 되어야하므로 도착 시간 기준으로 정렬.
  jobs.sort((a, b) => a[0] - b[0]);
  // 시작은 처음 도착한 것 부터.
  let currTime = jobs[0][0];
  let taskArrive, taskTime;
  let spend = 0;
  let i = 0;

  const pq = []; // 우선순위 큐로 사용할 배열

  while (i < jobs.length || pq.length) { // jobs의 태스크를 하나씩 담아가고, pq의 작업들을 하나씩 해결해나간다.
    // pq에 다 넣은 후에도 pq가 빌때까지 모두 수행.
    // 현재시간까지 도착한 작업에 대해 모두 최소힙에 넣는다.
    if (i < jobs.length && currTime >= jobs[i][0]) {
      heapPush(pq, jobs[i]);
      i++;
    } else {
      // 현재시간까지 도착한 작업이 없을 경우, 바로 작업을 하나 넣고 현재시간을 도착한 작업의 도착시간으로 초기화
      if (pq.length === 0) {
        heapPush(pq, jobs[i]);
        i++;
        currTime = pq[0][0];
      } else {
        // 최소힙에서 현재 시간에서 이미 도착했는데 수행되지 못한 작업 중에 가장 작업시간이 짧은 것을 꺼낸다.
        [taskArrive, taskTime] = heapPop(pq);
        // 이 작업의 도착부터 실행까지 대기시간 + 작업시간 을 총 시간에 더해준다.
        spend += (currTime - taskArrive) + taskTime;
        // 현재시간은 진행한 작업의 시간의 합
        currTime += taskTime;
      }
    }
  }

  return Math.floor(spend / jobs.length);
};
