// const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

input = `14 3
001
101
001
000
111
001
101
111
110
000
111
010
110
001
6`.split("\n");

// input = `5 2
// 01
// 10
// 01
// 01
// 10
// 1`.split("\n");

// input = `5 1
// 0
// 1
// 0
// 1
// 0
// 1000`.split("\n");
// input = `2 2
// 00
// 11
// 999`.split("\n");
// input = `1 6
// 101010
// 2`.split("\n");
// input = `3 2
// 01
// 10
// 10
// 1`.split("\n");

const [n, m] = input[0].split(" ").map(Number);
const table = [];
for (let i = 1; i <= n; i++) {
  const lamps = input[i].split("").map(Number);
  table.push(lamps);
}

const K = Number(input[n + 1]);
const combi = [];
const realK = K % m;
let colNums = "";

function checkRowOn(table) {
  let count = 0;
  table.forEach(row => {
    const onCount = row.reduce((acc, v) => acc + v, 0);
    if (onCount === m) {
      count += 1;
    }
  });
  return count;
}
function copy(table) {
  return table.map(row => {
    return [...row];
  });
}
function reverse(table, col) {
  for (let i = 0; i < n; i++) {
    if (table[i][col] === 1) {
      table[i][col] = 0;
    } else {
      table[i][col] = 1;
    }
  }
}

function dfs(L, acc) {
  if (L === realK) {
    combi.push(acc);
    return;
  }

  for (let i = 0; i < m; i++) {
    dfs(L + 1, acc + colNums[i]);
  }
}
for (let i = 0; i < m; i++) {
  colNums += i;
}
dfs(0, "");

let maxOnCount = 0;

combi.forEach(cols => {
  // copy table
  const copyTable = copy(table);
  cols
    .split("")
    .map(Number)
    .forEach(col => {
      reverse(copyTable, col);
    });
  // checkRowOn
  const count = checkRowOn(copyTable);
  // count
  maxOnCount = Math.max(count, maxOnCount);
});

console.log(maxOnCount);
