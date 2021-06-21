const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [NM, lengths] = input;
const [N, M] = NM.split(' ').map(Number);
lengths = lengths.split(' ').map(Number);

function getRemaining(nums, height) {
  return nums.reduce((acc, v) => acc + ((v - height) > 0 ? v - height : 0), 0);
}

lengths.sort((a, b) => a - b);

let left = 0;
let right = lengths[lengths.length - 1];
let result = Number.MIN_SAFE_INTEGER;
let remaining;
let mid;

while (left <= right) {
  mid = Math.floor((left + right) / 2);
  remaining = getRemaining(lengths, mid);

  if (M <= remaining) {
    result = Math.max(result, mid);
    left = mid + 1;
  } else if (M > remaining) {
    right = mid - 1;
  }
}

console.log(result)

