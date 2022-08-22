const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [S, T] = input;
let res = 0;

function recursion(str) {
  if (str.length < S.length) return;

  if (str === S) {
    res = 1;
    return;
  } else {
    if (str[str.length - 1] === 'A') {
      recursion(str.slice(0, str.length - 1));
    }
    const reversed = str
      .split('')
      .reverse()
      .join('');

    if (reversed[reversed.length - 1] === 'B') {
      recursion(reversed.slice(0, str.length - 1));
    }
  }
}
recursion(T);
console.log(res);
