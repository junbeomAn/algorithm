const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const nums = input[1].split(' ').map(Number);

// 기울기 구하는 함수

// 방정식 구하는 함수

// 방정식 위에 혹은 방정식을 지나는 곳에 있는지 판단하는 함수

// 각 점에 대해서 양쪽으로 각 점에 대한 기울기 구하고,
// 각점 사이에 있는 점들이 방정식을 지나는가 판정한다.

function getSlope(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}

// y = ax + b
function getB(slope, x1, y1) {
  return y1 - slope * x1;
}

function getEquation(x1, y1, x2, y2) {
  const slope = getSlope(x1, y1, x2, y2);
  const b = getB(slope, x1, y1);
  return [slope, b];
}
function getEquationResult(slope, b, x3) {
  return slope * x3 + b;
}

function isBelowConnLine(yOnLine, y3) {
  return yOnLine > y3;
}

function checkBuilding(start, end, slope, b) {
  for (let m = start + 1; m < end; m++) {
    const result = getEquationResult(slope, b, m);
    const isBelow = isBelowConnLine(result, nums[m]);
    if (!isBelow) {
      return false;
    }
  }
  return true;
}

let max = 0;

for (let i = 0; i < N; i++) {
  let count = 0;
  const curr = nums[i];
  for (let j = i - 1; j >= 0; j--) {
    const prev = nums[j];
    const [slope, b] = getEquation(i, curr, j, prev);

    if (checkBuilding(j, i, slope, b)) {
      count += 1;
    }
  }
  for (let k = i + 1; k < N; k++) {
    const next = nums[k];
    const [slope, b] = getEquation(i, curr, k, next);

    if (checkBuilding(i, k, slope, b)) {
      count += 1;
    }
  }
  max = Math.max(count, max);
}

console.log(max);
