const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);

const map = {};
for (let i = 1; i <= n; i++) {
  map[input[i]] = 1;
}
let count = n;
let res = '';

for (let i = n + 1; i <= n + m; i++) {
  const keywords = input[i].split(',');
  keywords.forEach(k => {
    if (map[k]) {
      delete map[k];
      count -= 1;
    }
  });
  res += count + '\n';
}
console.log(res);
