const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const nums = input[1].split(' ').map(Number);

// 이분탐색

/**
 * 왼쪽 = [0]
 * 오른쪽 = [길이 - 1]
 * 중간 = 왼쪽 + 오른쪽
 *
 * 만약 중간값이 0 보다 작으면 왼쪽을 올린다.  이전 중간값과의 절대값 비교 후 작으면 할당 및 왼쪽 오른쪽 저장.
 *
 * 중간값이 0보다 크면 오른쪽을 내린다.  이전 중간값과의 절대값 비교 후 작으면 할당 및 왼쪽 오른쪽 저장.
 *
 * 중간값이 0이라면 그냥 즉시 저장하고 종료. 왼쪽 오른쪽 저장.
 *
 *
 */

let left = 0;
let right = nums.length - 1;

let mid = nums[left] + nums[right];
let res = mid;
let l1 = nums[left];
let l2 = nums[right];

while (left < right) {
  if (Math.abs(res) > Math.abs(mid)) {
    res = mid;
    l1 = nums[left];
    l2 = nums[right];
  }
  if (mid < 0) {
    left += 1;
  } else if (mid > 0) {
    right -= 1;
  } else {
    break;
  }
  mid = nums[left] + nums[right];
}

console.log(`${l1} ${l2}`);
