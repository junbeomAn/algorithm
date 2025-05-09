var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const nums = input[1].split(" ").map(Number);
const q = input.slice(2);
const sum = Array(nums.length).fill(0);

sum[0] = nums[0];
for (let i = 1; i < nums.length; i++) {
  sum[i] = sum[i - 1] + nums[i];
}
let res = "";
for (let i = 0; i < q.length; i++) {
  const [s, e] = q[i].split(" ");
  res += sum[e - 1] - sum[s - 1] + nums[s - 1] + "\n";
}

console.log(res.trim());
