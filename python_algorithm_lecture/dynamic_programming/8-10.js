/**
 * dp[0] = 0
 * dp[1] = 1
 * dp[2] = 1
 * dp[3] = 2
 * dp[4] = 2
 * dp[5] = min(dp[5 - 5], dp[5 - 2], dp[5 - 1]) + 1
 * dp[14] = min(dp[14 - 5], dp[14 - 2], dp[14 - 1]) + 1
 * dp[15] = min(dp[15 - 5], dp[15 - 2], dp[15 - 1]) + 1
 */
const n = 290;
const coin = `1 5 10 15 20 25 30 50 70 65 90 100`.split(' ').map(Number);
const dp = Array(n + 1).fill(0);

for (let i = 0; i < coin.length; i++) {
  dp[coin[i]] = 1;
}

function dfs(k) {
  if (k === 0 || dp[k] !== 0) {
    return dp[k];
  }

  const res = [];
  for (let i = 0; i < coin.length; i++) {
    if (k > coin[i] ) {
      res.push(dfs(k - coin[i]));
    }
  }

  // console.log(res)
  dp[k] = Math.min(...res) + 1;
  return dp[k];
}

dfs(n);
console.log(dp[n])
