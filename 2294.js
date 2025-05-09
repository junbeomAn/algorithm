var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

const dp = Array(100001).fill(Infinity);

for (const coin of coins) {
  dp[coin] = 1;
}
dp[0] = 0;

for (let i = 1; i <= k; i++) {
  let min = Infinity;
  for (const coin of coins) {
    if (i >= coin) {
      min = Math.min(min, dp[i - coin]);
    }
  }

  dp[i] = min === Infinity ? Infinity : min + 1;
}

console.log(dp[k] !== Infinity ? dp[k] : -1);
