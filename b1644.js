var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

const num = +input;

console.log(getConsecutiveSumCnt(getPrimes(num), num));

function getConsecutiveSumCnt(nums, target) {
  let sum = 0;
  let left = -1,
    right = -1;
  let cnt = 0;

  while (left <= right && right < nums.length - 1) {
    if (sum < target) {
      right += 1;
      sum += nums[right];
    } else if (sum > target) {
      left += 1;
      sum -= nums[left];
    } else {
      cnt += 1;
      right += 1;
      sum += nums[right];
    }
  }

  while (left <= right && sum > target) {
    left += 1;
    sum -= nums[left];
  }

  if (sum === target) {
    cnt += 1;
  }
  return cnt;
}

function getPrimes(n) {
  const nums = Array(n + 1)
    .fill(0)
    .map((_, i) => i);
  nums[1] = 0;

  for (let i = 2; i <= n; i++) {
    if (nums[i] !== 0) {
      for (let j = i + i; j <= n; j += i) {
        nums[j] = 0;
      }
    }
  }
  return nums.filter((num) => num !== 0);
}
