var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input;

const dp = Array(N + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= Math.sqrt(i); j++) {
    const pow = j ** 2;
    if (i < pow) {
      break;
    }
    dp[i] = Math.min(dp[i], dp[i - pow] + 1);
  }
}
console.log(dp[N]);
