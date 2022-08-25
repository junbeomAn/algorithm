const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

class Q {
  q = null;
  front = 0;
  rear = 0;

  constructor(n) {
    this.q = Array(n)
      .fill(0)
      .map((_, i) => i + 1);
    this.rear = n - 1;
  }
  dequeue() {
    return this.q[this.front++];
  }
  enqueue(x) {
    this.q.push(x);
    this.rear++;
  }
  get length() {
    return this.rear - this.front + 1;
  }
  get first() {
    return this.q[this.front];
  }
}

const N = +input;

const arr = new Q(N);

while (arr.length > 1) {
  arr.dequeue();
  const p = arr.dequeue();
  arr.enqueue(p);
}

console.log(arr.first);
