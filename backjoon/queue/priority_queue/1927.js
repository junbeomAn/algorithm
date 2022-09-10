const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];

class Heap {
  _store = [];
  _minOrMax; // 1 min heap, -1 max heap

  constructor(minOrMax = 1) {
    this._minOrMax = minOrMax;
  }
  compare(a, b) {
    if (this._minOrMax === 1) {
      return a < b;
    } else {
      return a > b;
    }
  }
  get(i) {
    return this._store[i];
  }
  set(i, value) {
    this._store[i] = value;
  }
  get length() {
    return this._store.length;
  }
  log() {
    console.log(this._store);
  }
  swap(i, j) {
    const temp = this.get(i);
    this.set(i, this.get(j));
    this.set(j, temp);
  }
  heapPush(n) {
    this._store.push(n);

    let currIdx = this._store.length - 1;
    let parentIdx = Math.floor((currIdx - 1) / 2);

    while (
      currIdx > 0 &&
      this.compare(this.get(currIdx), this.get(parentIdx))
    ) {
      this.swap(currIdx, parentIdx);
      currIdx = parentIdx;
      parentIdx = Math.floor((currIdx - 1) / 2);
    }
  }
  heapPop() {
    const ret = this.get(0);
    const last = this.get(this.length - 1);
    let currIdx = 0;
    let changeIdx = currIdx;

    this.set(0, last);
    this._store.pop();

    if (this.length === 0) {
      return ret;
    }

    while (this.length > 1) {
      changeIdx = currIdx * 2 + 1;
      if (changeIdx >= this.length) {
        break;
      }
      if (
        changeIdx < this.length - 1 &&
        this.compare(this.get(changeIdx + 1), this.get(changeIdx))
      ) {
        changeIdx = changeIdx + 1;
      }

      if (changeIdx === currIdx) {
        break;
      }
      if (this.compare(this.get(currIdx), this.get(changeIdx))) {
        break;
      }
      this.swap(currIdx, changeIdx);
      currIdx = changeIdx;
    }

    return ret;
  }
}

const minHeap = new Heap(1);
let res = '';

for (let i = 1; i <= input.length; i++) {
  if (+input[i] === 0) {
    const v = minHeap.heapPop();
    if (v) {
      res += `${v}\n`;
    } else {
      res += `${0}\n`;
    }
  } else {
    minHeap.heapPush(+input[i]);
  }
}
console.log(res);
