// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input = `6
5
4
4
4
3
3`.split('\n').map(Number)
function minHeapPush(q, node) {
  q.push(node);
  let index = q.length - 1;
  let parentIndex = Math.floor((index - 1) / 2);

  while (index > 0 && q[index] < q[parentIndex]) {
    [q[index], q[parentIndex]] = [q[parentIndex], q[index]];
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
  }
}

function maxHeapPush(q, node) {
  q.push(node);
  let index = q.length - 1;
  let parentIndex = Math.floor((index - 1) / 2);

  while (index > 0 && q[index] > q[parentIndex]) {
    [q[index], q[parentIndex]] = [q[parentIndex], q[index]];
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
  }
}

function minHeapPop(q) {
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
    if (child < q.length - 1 && q[child] > q[child + 1]) {
      child = child + 1;
    }

    if (child !== index && (q[child] < q[index])) {
      [q[child], q[index]] = [q[index], q[child]];
      index = child;
    } else {
      stop = true;
    }
  }

  return ret;
}

function maxHeapPop(q) {
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
    if (child < q.length - 1 && q[child] < q[child + 1]) {
      child = child + 1;
    }

    if (child !== index && (q[child] > q[index])) {
      [q[child], q[index]] = [q[index], q[child]];
      index = child;
    } else {
      stop = true;
    }
  }

  return ret;
}

let mid = +input[1];
console.log(mid)

const minHeap = [];
const maxHeap = [];

for (let i = 2; i <= +input[0]; i++) {
  const num = +input[i];
  if (maxHeap.length === minHeap.length) {
    // 범위 양쪽이 같다.
    // mid 랑 비교후 크면 minheap
    // 숫자가 작으면 mid를 minheap에 넣고 작은 수로 mid 갱신.
    if (num >= mid) {
      minHeapPush(minHeap, num);
    } else {
      minHeapPush(minHeap, mid);
      mid = num;
    }
  } else if (maxHeap.length < minHeap.length) {
    // 왼쪽 범위가 더 작다
    // mid 랑 비교 후 숫자가 크면 mid를 max heap에 넣고, mid엔 숫자
    // 숫자가 작으면 max heap에 넣는다(작은쪽)
    if (num >= mid) {
      maxHeapPush(maxHeap, mid);
      mid = num;
    } else {
      maxHeapPush(maxHeap, num);
    }
  }
  // else if (maxHeap.length > minHeap.length) {
  //   // 오른쪽 범위가 더 작다.
  //   // mid 랑 비교후 작으면 maxheap
  //   // 숫자가 크면 min heap
  // }
  console.log(num, mid);
  console.log(maxHeap, minHeap)
}



