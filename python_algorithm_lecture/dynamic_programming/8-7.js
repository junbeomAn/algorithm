
function checkRange(x, y, n) {
  return (0 <= x && x < n) && (0 <= y && y < n);
}

function shortestPath(n, board) {
  const INF = 2147483647;
  const dp = new Array(n).fill(null).map(_ => new Array(n).fill(INF));

  const q = [];
  q.push([0, 0]);
  dp[0][0] = board[0][0];

  while (q.length) {
    const [cx, cy] = q.shift();
    const spentEnergy = dp[cx][cy];

    if (checkRange(cx + 1, cy, n) && spentEnergy + board[cx + 1][cy] < dp[cx + 1][cy]) {
      q.push([cx + 1, cy]);
      dp[cx + 1][cy] = spentEnergy + board[cx + 1][cy];
    }

    if (checkRange(cx, cy + 1, n) && spentEnergy + board[cx][cy + 1] < dp[cx][cy + 1]) {
      q.push([cx, cy + 1]);
      dp[cx][cy + 1] = spentEnergy + board[cx][cy + 1];
    }
  }
  return dp[n - 1][n - 1];
}
const input = `7 1 2 9 1 9 9 3 6 3 7 2 8 4 1 3 9
5 3 5 4 8 7 9 7 7 8 4 1 3 8 2 3 8
6 3 5 3 7 6 7 9 5 4 2 5 7 6 1 8 4
6 2 3 6 4 7 9 1 9 1 5 9 1 4 2 2 4
8 1 3 7 6 1 1 8 6 9 1 8 6 5 9 8 8
6 1 3 9 5 6 3 4 2 4 9 1 8 1 8 8 1
2 6 4 1 4 4 8 9 1 9 7 5 7 6 6 2 9
7 5 8 4 9 2 6 5 4 4 1 1 7 9 6 9 8
5 1 9 5 2 7 8 5 1 4 8 3 6 9 7 6 6
3 9 7 5 4 7 6 1 2 1 6 5 8 2 3 7 4
4 4 7 9 2 3 6 7 3 9 6 6 3 9 2 6 5
3 1 8 3 3 6 8 5 5 3 4 1 3 3 5 7 8
5 1 4 6 5 7 9 8 5 6 5 4 9 6 7 9 7
9 4 4 2 5 1 4 4 7 8 7 3 4 6 9 1 1
4 4 8 9 2 9 3 5 4 7 4 6 8 9 5 3 6
1 1 1 9 3 2 1 5 5 7 6 6 4 4 8 5 4
7 7 8 2 7 3 5 2 8 5 7 9 9 1 1 5 1`
const res = shortestPath(17, input.split('\n')
.map(line => line.split(' ').map(Number)));
console.log(res);
