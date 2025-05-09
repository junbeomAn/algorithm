var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);

const arr = input.slice(1, N + 1).map((row) => row.split(" "));
const operations = input
  .slice(N + 1, N + 1 + K)
  .map((row) => row.split(" ").map(Number));

function rotate(tpLft, btmRght, arr) {
  const [lr, lc] = tpLft;
  const [rr, rc] = btmRght;

  if (lr === rr && lc === rc) return;

  let curr = arr[lr][lc];
  let next = arr[lr][lc + 1];

  for (let i = lc; i < rc; i++) {
    next = arr[lr][i + 1];
    arr[lr][i + 1] = curr;
    curr = next;
  }

  for (let i = lr; i < rr; i++) {
    next = arr[i + 1][rc];
    arr[i + 1][rc] = curr;
    curr = next;
  }

  for (let i = rc; i > lc; i--) {
    next = arr[rr][i - 1];
    arr[rr][i - 1] = curr;
    curr = next;
  }

  for (let i = rr; i > lr; i--) {
    next = arr[i - 1][lc];
    arr[i - 1][lc] = curr;
    curr = next;
  }

  rotate([lr + 1, lc + 1], [rr - 1, rc - 1], arr);
}

const permutations = [];
const used = Array(operations.length).fill(false);

function getPermutat(dpth, currOrder) {
  if (dpth === used.length) {
    permutations.push(currOrder);
    return;
  }

  for (let i = 0; i < operations.length; i++) {
    if (!used[i]) {
      used[i] = true;
      getPermutat(dpth + 1, currOrder + i);
      used[i] = false;
    }
  }
}
getPermutat(0, "");
let min = Infinity;

permutations.forEach((pmt) => {
  const sortedOperations = [];
  for (const i of pmt) {
    sortedOperations.push(operations[i]);
  }
  const newArr = arr.map((row) => row.slice());

  sortedOperations.forEach(([r, c, s]) => {
    const topLeft = [r - s - 1, c - s - 1];
    const rightBtm = [r + s - 1, c + s - 1];

    rotate(topLeft, rightBtm, newArr);
  });

  const currMin = newArr.reduce((acc, row) => {
    const sum = row.reduce((acc, v) => acc + +v, 0);
    return acc > sum ? sum : acc;
  }, Infinity);
  min = Math.min(currMin, min);
});

console.log(min);
