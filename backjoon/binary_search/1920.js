const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const A = input[1].split(' ').map(Number);

const t = input[3].split(' ').map(Number);

A.sort((a, b) => a - b);
let res = '';

t.forEach((v) => {
  let left = 0;
  let right = n - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (A[mid] < v) {
      left = mid + 1;
    } else if (A[mid] > v) {
      right = mid - 1;
    } else {
      res += `1\n`;
      return;
    }
  }
  res += `0\n`;
});
console.log(res);
