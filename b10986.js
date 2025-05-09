var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

const remain = Array(N).fill(0);
const groups = Array(M).fill(0);

remain[0] = nums[0] % M;

for (let i = 1; i < N; i++) {
  remain[i] = (remain[i - 1] + nums[i]) % M;
}

for (let i = 0; i < N; i++) {
  groups[remain[i]] += 1;
}
let answer = 0;

for (let i = 0; i < M; i++) {
  answer += (groups[i] * (groups[i] - 1)) / 2;
}
answer += groups[0];

console.log(answer);
