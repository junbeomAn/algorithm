const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const nums = input[1].split(' ').map(Number);
const M = +input[2];

let left = 0;
let right = Math.max(...nums);

let mid;
let tempSum;
let res = 0;

while (left <= right) {
  mid = Math.floor((left + right) / 2);
  tempSum = budgetSum(nums, mid);
  if (tempSum <= M) {
    res = mid;
    left += 1;
  } else {
    right -= 1;
  }
}

function budgetSum(budgets, limit) {
  return budgets.reduce((acc, v) => (v <= limit ? acc + v : acc + limit), 0);
}

console.log(res);
