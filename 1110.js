// 1. 입력값이 한 개일 때(한 줄)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function sumAndLast(num) {
  const n = `${num
    .split("")
    .map(Number)
    .reduce((acc, v) => acc + v, 0)}`;
  return n[n.length - 1];
}

function last(num) {
  return num.split("")[num.length - 1];
}

let cnt = 0;
let num;
while (Number(num) !== Number(input)) {
  if (num === undefined) {
    num = input;
  }
  num = last(num) + sumAndLast(num);
  cnt += 1;
}

console.log(cnt);
