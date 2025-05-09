// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input = `5
3 2 1 -3 -1`.split("\n");

const nums = input[1].split(" ").map((n, i) => [Number(n), i]);

let res = "";

let [move, idx] = nums[0];
res += `${idx + 1}`;
idx = (idx + move > 0 ? idx + move : -(idx + move)) % move;
nums.shift();
console.log(nums, (idx + move) % 4);

while (nums.length) {
  [move, idx] = nums[idx];
  res = `${res} ${idx + 1}`;
  nums.splice(idx, 1);
  idx = (idx + move > 0 ? idx + move : -(idx + move)) % move;
}

console.log(res);
