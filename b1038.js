var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input;

const arr = Array(10)
  .fill(0)
  .map((_, i) => i);

if (arr[N] !== undefined) {
  console.log(arr[N]);
} else {
  const nums = [];
  function dfs(n, last) {
    nums.push(n);

    for (let k = last - 1; k >= 0; k--) {
      dfs(n * 10 + k, k);
    }
  }

  dfs(0, 10);
  nums.sort((a, b) => a - b);
  console.log(nums[N + 1] !== undefined ? nums[N + 1] : -1);
}
