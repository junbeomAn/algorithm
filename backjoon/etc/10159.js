const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// floyd warshall

const n = +input[0];

const d = Array(n + 1)
  .fill(0)
  .map(_ => Array(n + 1).fill(1000));
let res = '';

for (let i = 2; i < input.length; i++) {
  const [s, e] = input[i].split(' ').map(Number);
  d[s][e] = 1;
}

for (let i = 1; i <= n; i++) {
  d[i][i] = 0;
}
for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (d[i][j] > d[i][k] + d[k][j]) {
        d[i][j] = d[i][k] + d[k][j];
      }
    }
  }
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (d[i][j] < 1000) {
      d[j][i] = d[i][j];
    }
  }
}

for (let i = 1; i <= n; i++) {
  let count = 0;
  for (let j = 1; j <= n; j++) {
    if (d[i][j] >= 1000) {
      count += 1;
    }
  }
  res += count + '\n';
}
console.log(res.trim());
