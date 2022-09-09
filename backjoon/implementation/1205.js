const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, newScore, P] = input[0].split(' ').map(Number);
const scores = N > 0 ? input[1].split(' ').map(Number) : [];
let res = -1;

if (N === 0) {
  console.log(1);
} else {
  for (let i = scores.length - 1; i >= 0; i--) {
    if (scores[i] <= newScore) {
      if (N === P) {
        if (i === scores.length - 1 && scores[i] === newScore) {
          res = -1;
          break;
        } else {
          res = i + 1;
        }
      } else {
        // N < P
        res = i + 1;
      }
    }
  }
  if (res === -1 && N < P) {
    console.log(N + 1);
  } else {
    console.log(res);
  }
}
