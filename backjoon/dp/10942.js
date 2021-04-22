var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const M = +input[2];
let dp = [];
let res = "";

for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = i; j <= N; j++) {
    dp[i][j] = -1;
  }
}

const nums = input[1].split(" ");

function dfs(S, E) {
  if (dp[S][E] > -1) {
    return dp[S][E];
  }
  if (S > E) {
    return (dp[S - 1][E + 1] = 1);
  }
  if (S === E) {
    return (dp[S][E] = 1);
  }
  if (nums[S - 1] === nums[E - 1]) {
    return (dp[S][E] = dfs(S + 1, E - 1));
  } else {
    return (dp[S][E] = 0);
  }
}

for (let i = 3; i < M + 3; i++) {
  const [x, y] = input[i].split(" ");

  res += dfs(+x, +y) + "\n";
}

console.log(res);
