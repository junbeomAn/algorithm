/**
 * dp[0] = 0
 * dp[1] = 0
 * dp[2] = 0
 * dp[3] = 8
 * dp[4] = 8
 * dp[5] = 12
 * dp[6] = 14
 * dp[7] = 14
 * dp[8] = max(dp[5]+dp[3], dp[4] + dp[4], dp[7] + dp[1], 11) = 11
 */
function knapsack(n, max, wv) {
  const dp = [];

  wv.sort((a, b) => a[0] - b[0]);
  // 첫숫자 전까지는 0으로 채운다
  // wv에 해당 숫자가 있으면 그걸로 채우고
  for (let i = 0; i <= max; i++) {
    dp[i] = 0;
  }
  dp[wv[0][0]] = wv[0][1];

  for (let j = wv[0][0]; j <= max; j++) {
    let k = 0;

    while (k < n) {
      const weight = wv[k][0];
      if (j < weight) break;

      const value = wv[k][1];
      dp[j] = Math.max(value + dp[j - weight], dp[j]);
      k += 1;
    }
  }
  console.log(Math.max(...dp));
}

knapsack(30, 500, [[5, 11],[3, 8],[6, 14],[4, 8],[7, 18],[2, 6],[13, 28],[9, 19],[10, 20],[11, 23],[15, 30],[13, 18],[16, 34],[11, 8],[17, 28],[12, 16],[23, 38],[19, 39],[11, 20],[17, 23], [15, 11],[13, 8],[26, 14],[24, 8],[37, 18],[22, 6],[13, 28],[19, 19],[20, 20],[21, 23]]);

