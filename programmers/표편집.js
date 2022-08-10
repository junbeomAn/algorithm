class List {
  head = null;
  tail = null;
  selected = null;
  stackBin = [];

  constructor(n, k) {
    this.init(n, k);
  }
  init(n, k) {
    this.head = new Node(0);
    let curr = this.head;
    let start = 1;
    while (start < n) {
      const node = new Node(start);
      if (start === k) {
        this.selected = node;
      }
      curr.next = node;
      node.prev = curr;
      curr = curr.next;
      start += 1;
    }
  }
  delete() {
    this.stackBin.push(this.selected);
    const nextSelected = this.selected.next || this.selected.prev;
    // console.log(nextSelected, this.selected)
    if (this.selected.prev) {
      this.selected.prev.next = this.selected.next;
    }
    if (this.selected.next) {
      this.selected.next.prev = this.selected.prev;
    }
    this.selected = nextSelected;
    if (this.selected.prev === null) {
      this.head = this.selected;
    }
  }
  recover() {
    const item = this.stackBin.pop();
    if (item.prev) {
      item.prev.next = item;
    }
    if (item.next) {
      item.next.prev = item;
    }
    if (item.prev === null) {
      this.head = item;
    }
  }
  select(cmd, step) {
    let nextSelect = this.selected;
    while (nextSelect && step) {
      if (cmd === 'U') {
        nextSelect = nextSelect.prev;
      } else {
        nextSelect = nextSelect.next;
      }
      step -= 1;
    }
    this.selected = nextSelect;
  }
  execute(cmd, param) {
    if (cmd === 'U' || cmd === 'D') {
      this.select(cmd, param);
    } else if (cmd === 'C') {
      this.delete();
    } else {
      this.recover();
    }
  }
}

class Node {
  next = null;
  prev = null;
  num = null;
  constructor(n) {
    this.num = n;
  }
}

function solution(n, k, cmd) {
  const list = new List(n, k);

  cmd.forEach((item) => {
    const [cmd, step] = item.split(' ');
    list.execute(cmd, Number(step));
  });

  let curr = list.head;
  let ret = '';
  for (let i = 0; i < n; i++) {
    if (curr.num === i) {
      curr = curr.next;
      ret += 'O';
    } else {
      ret += 'X';
    }
  }
  return ret;
}
