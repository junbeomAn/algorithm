var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const trees = input.slice(1).map(Number);
const gaps = getTreeGaps(trees);
const gcd = gaps.reduce(getGCD);

const dist = trees[trees.length - 1] - trees[0];
const fills = dist / gcd - 1;

console.log(fills - (trees.length - 2));

function getTreeGaps(trees) {
  const gaps = [];

  for (let i = 0; i < trees.length - 1; i++) {
    gaps.push(trees[i + 1] - trees[i]);
  }
  return gaps;
}

function getGCD(a, b) {
  let big = a > b ? a : b;
  let small = a <= b ? a : b;
  let tmp;

  while (big % small > 0) {
    tmp = small;
    small = big % small;
    big = tmp;
  }
  return small;
}
