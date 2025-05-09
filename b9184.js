var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const args = input.map((r) => r.split(" ").map(Number));
const N = 21;
const dp = Array(N)
  .fill(0)
  .map(() =>
    Array(N)
      .fill(0)
      .map(() => Array(N).fill(0))
  );

// function execute(a, b, c) {
//   if (a <= 0 || b <= 0 || c <= 0) {
//     return 1;
//   }
//   if (dp[a][b][c] > 0) {
//     return dp[a][b][c];
//   }

//   if (a > 20 || b > 20 || c > 20) {
//     return execute(20, 20, 20);
//   } else if (a < b && b < c) {
//     dp[a][b][c] =
//       execute(a, b, c - 1) + execute(a, b - 1, c - 1) - execute(a, b - 1, c);
//     return dp[a][b][c];
//   } else {
//     dp[a][b][c] =
//       execute(a - 1, b, c) +
//       execute(a - 1, b - 1, c) +
//       execute(a - 1, b, c - 1) -
//       execute(a - 1, b - 1, c - 1);

//     return dp[a][b][c];
//   }
// }

function execute(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  } else if (a > 20 || b > 20 || c > 20) {
    (a = 20), (b = 20), (c = 20);
  }

  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let k = 0; k <= c; k++) {
        if (i === 0 || j === 0 || k === 0) {
          dp[i][j][k] = 1;
        } else if (i < j && j < k) {
          dp[i][j][k] = dp[i][j][k - 1] + dp[i][j - 1][k - 1] - dp[i][j - 1][k];
        } else {
          dp[i][j][k] =
            dp[i - 1][j][k] +
            dp[i - 1][j - 1][k] +
            dp[i - 1][j][k - 1] -
            dp[i - 1][j - 1][k - 1];
        }
      }
    }
  }

  return dp[a][b][c];
}

for (let i = 0; i < args.length - 1; i++) {
  const [a, b, c] = args[i];
  dp[0][0][0] = 1;
  console.log(`w(${a}, ${b}, ${c}) = ${execute(a, b, c)}`);
}
