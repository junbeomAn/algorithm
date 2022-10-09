const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const sign = ['+', '-', ' '];

function calc(acc) {
  let joined = acc.split(' ').join('');
  let res = 0;
  let numsQ = [];
  const signsQ = [];

  for (let i = 0; i < joined.length; i++) {
    if (joined[i] < '0' || '9' < joined[i]) {
      signsQ.push(joined[i]);
    }
  }

  function splitBySign(str) {
    for (let j = 0; j < sign.length - 1; j++) {
      str = str.split(sign[j]).join(',');
    }
    return str;
  }
  numsQ = splitBySign(joined)
    .split(',')
    .map(Number);
  res = numsQ[0];

  for (let k = 0; k < signsQ.length; k++) {
    if (signsQ[k] === '+') {
      res += numsQ[k + 1];
    } else if (signsQ[k] === '-') {
      res -= numsQ[k + 1];
    }
  }
  return res;
}

function recursion(N, n, acc, results) {
  if (n === N) {
    if (calc(acc) !== 0) return;

    results.push(acc);
    return;
  }

  for (let i = 0; i < sign.length; i++) {
    recursion(N, n + 1, `${acc}${sign[i]}${n + 1}`, results);
  }
}

for (let t = 0; t < T; t++) {
  const N = +input[t + 1];
  const results = [];
  recursion(N, 1, '1', results);
  console.log(results.sort().join('\n'));
  console.log();
}
