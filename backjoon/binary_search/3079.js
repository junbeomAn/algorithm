const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(BigInt);
const immigration = [];

for (let i = 1; i <= n; i++) {
  immigration.push(BigInt(input[i]));
}

let left = BigInt(0);
let right = BigInt(10 ** 18);
let mid;
let res = BigInt(10 ** 18);

function check(time, m) {
  let sum = BigInt(0);
  for (let i = 0; i < immigration.length; i++) {
    sum += time / immigration[i];
    if (sum >= m) {
      return false;
    }
  }
  return true;
}

while (left <= right) {
  mid = BigInt((left + right) / BigInt(2));

  if (check(mid, m)) {
    left = mid + BigInt(1);
  } else {
    right = mid - BigInt(1);
    res = res > mid ? mid : res;
  }
}
console.log(res.toString());
