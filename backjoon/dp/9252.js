const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B] = input;

function check(a, b) {
  const dp = Array(a.length + 1)
    .fill(0)
    .map((_) => Array(b.length + 1).fill(0));

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  let result = [];
  let i = a.length;
  let j = b.length;

  while (dp[i][j] > 0) {
    if (dp[i - 1][j] === dp[i][j]) {
      i = i - 1;
    } else if (dp[i][j - 1] === dp[i][j]) {
      j = j - 1;
    } else {
      result.push(a[i - 1]);
      i = i - 1;
      j = j - 1;
    }
  }

  console.log(dp[a.length][b.length]);
  if (dp[a.length][b.length] > 0) {
    console.log(result.reverse().join(''));
  }
}

check(A, B);