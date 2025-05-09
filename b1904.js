var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

const dp = Array(N + 1).fill(0);
const MOD = 15746;

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < N + 1; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
}

console.log(dp[N] % MOD);
