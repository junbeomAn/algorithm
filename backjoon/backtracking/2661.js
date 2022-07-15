const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
let res = null;
const nums = [1, 2, 3];

function check(acc) {
  const len = acc.length;

  for (let size = 1; size <= Math.floor(len / 2); size++) {
    for (let i = 0; i <= len - size * 2; i++) {
      if (acc.slice(i, i + size) === acc.slice(i + size, i + size * 2)) {
        return false;
      }
    }
  }
  return true;
}

function goodSequence(n, acc, pos) {
  if (res) {
    return;
  }
  if (n === N) {
    res = acc;
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === +acc[acc.length - 1]) continue;
    if (!check(acc + nums[i])) continue;

    goodSequence(n + 1, acc + nums[i], pos + 1);
  }
}
goodSequence(0, '', 1);

console.log(res);
