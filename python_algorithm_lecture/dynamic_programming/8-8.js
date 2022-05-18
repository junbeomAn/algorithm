
const INF = 2147483647;
const board = `9 6 2 9 9 2 9 5 5 3 6 1 7 4 7
8 4 2 4 1 3 4 9 3 2 1 1 2 4 4
9 5 7 6 7 7 7 5 3 1 1 8 4 8 3
9 9 8 3 7 2 6 2 5 2 5 3 1 7 9
6 7 5 2 7 3 3 6 2 3 6 4 7 7 7
1 1 2 8 1 5 8 9 4 5 8 2 4 1 5
3 7 6 4 9 4 7 8 9 9 5 5 3 5 3
8 3 3 8 6 5 6 5 7 7 8 2 2 5 9
8 1 8 7 3 1 1 4 8 4 9 1 4 9 4
2 1 5 1 9 3 1 3 5 7 9 7 9 8 8
9 4 6 8 2 3 8 3 8 4 9 1 9 8 3
8 3 3 1 8 4 8 5 9 7 5 9 8 4 7
7 5 1 2 8 6 6 3 6 8 5 1 4 3 4
8 3 3 8 7 1 1 2 8 3 2 7 1 1 1
1 4 6 6 5 9 9 6 5 2 8 3 2 5 6`.split('\n').map(line => line.split(' ').map(Number));
const n = board.length;
const dp = new Array(n).fill(null).map(_ => new Array(n).fill(INF));

dp[0][0] = board[0][0];

for (let i = 1; i < n; i++) {
  dp[i][0] = dp[i - 1][0] + board[i][0];
  dp[0][i] = dp[0][i - 1] + board[0][i];
}

function dfs(x, y, board) {
  if (dp[x][y] !== INF) {
    return dp[x][y];
  }
  dp[x][y] = Math.min(dfs(x - 1, y, board), dfs(x, y - 1, board)) + board[x][y];
  return dp[x][y];
}
dfs(n - 1, n - 1, board)
console.log(dp[n - 1][n - 1]);

