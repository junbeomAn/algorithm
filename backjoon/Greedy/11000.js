var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function heapPush(q, node) {
  q.push(node);
  let index = q.length - 1;
  let parentIndex = Math.floor((index - 1) / 2);

  while (index > 0 && q[index] < q[parentIndex]) {
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
      if (leftChild <= rightChild) {
        changeIndex = index * 2 + 1;
      } else {
        changeIndex = index * 2 + 2;
      }
    } else if (leftChild && !rightChild) {
      changeIndex = index * 2 + 1;
    } else {
      stop = true;
    }
    if (changeIndex !== index && q[changeIndex] < q[index]) {
      [q[changeIndex], q[index]] = [q[index], q[changeIndex]];
      index = changeIndex;
    } else {
      stop = true;
    }
  }

  return ret;
}

const N = +input[0];
let timetable = [];

for (let i = 1; i < N + 1; i++) {
  timetable.push(input[i].split(" ").map(Number));
}

let q = [];
timetable.sort((a, b) => a[0] - b[0]);

q.push(timetable[0][1]);

for (let i = 1; i < N; i++) {
  const [start, end] = timetable[i];
  if (q[0] <= start) {
    heapPop(q);
    heapPush(q, end);
  } else {
    heapPush(q, end);
  }
}

console.log(q.length);
