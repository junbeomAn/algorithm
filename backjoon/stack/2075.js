const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
    let changeIdx = 0;

    this.set(0, last);
    this._store.pop();

    const getChildren = function(i) {
      return [
        [i * 2 + 1, this.get(i * 2 + 1)],
        [i * 2 + 2, this.get(i * 2 + 2)]
      ];
    };

    let [[li, lc], [ri, rc]] = getChildren.call(this, currIdx);

    while (lc && this.compare(lc, this.get(currIdx))) {
      changeIdx = li;

      if (rc && this.compare(rc, lc)) {
        changeIdx = ri;
      }
      this.swap(currIdx, changeIdx);
      currIdx = changeIdx;
      [[li, lc], [ri, rc]] = getChildren.call(this, currIdx);
    }

    return ret;
  }
}

let n;
const minHeap = new Heap(1);

rl.on('line', input => {
  if (n === undefined) n = +input;
  else {
    input.split(' ').forEach(v => {
      v = +v;
      if (minHeap.length < n) minHeap.heapPush(v);
      else if (minHeap.get(0) < v) {
        minHeap.heapPop();
        minHeap.heapPush(v);
      }
    });
  }
}).on('close', () => {
  console.log(minHeap.get(0));
  process.exit();
});
