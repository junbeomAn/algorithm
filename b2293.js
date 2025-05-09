// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input = `3 10
1
2
5`.split("\n");
const [n, k] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

// 해당문제는 메모리 초과 때문에 node 로는 풀 수 없음. 푼 사람 없음.
// 그러나 이렇게 푸는게 아님. 다만 모든 경우의수를 직접 구할 수 있기에 괜찮은 풀이라고 생각.

// const dp = Array(100001)
//   .fill(0)
//   .map(() => new Set());

// dp[0].add("");

// for (let i = 1; i <= k; i++) {
//   for (const coin of coins) {
//     if (i >= coin) {
//       for (const prevComb of dp[i - coin]) {
//         const sorted = `${prevComb}${prevComb === "" ? "" : ","}${coin}`.split(
//           ","
//         );
//         sorted.sort((a, b) => a - b);

//         dp[i].add(sorted.join(","));
//       }
//     }
//   }
// }
// console.log(dp[k].size);

const dp = Array(k + 1).fill(0);

dp[0] = 1;

for (const coin of coins) {
  for (let i = coin; i <= k; i++) {
    dp[i] = dp[i] + dp[i - coin];
  }
}
console.log(dp[k]);
