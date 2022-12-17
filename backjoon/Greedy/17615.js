const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const str = input[1];

let min = Infinity;

function makeCount(str) {
  let count = 0;
  let wall = false;

  for (let i = 0; i < str.length; i++) {
    // RED - L
    if (str[i] === 'B') wall = true;
    if (wall && str[i] === 'R') {
      count += 1;
    }
  }
  min = Math.min(count, min);
  count = 0;
  wall = false;

  for (let i = str.length - 1; i >= 0; i--) {
    // RED - R
    if (str[i] === 'B') wall = true;
    if (wall && str[i] === 'R') {
      count += 1;
    }
  }
  min = Math.min(count, min);
  count = 0;
  wall = false;

  for (let i = 0; i < str.length; i++) {
    // BLUE - L
    if (str[i] === 'R') wall = true;
    if (wall && str[i] === 'B') {
      count += 1;
    }
  }
  min = Math.min(count, min);
  count = 0;
  wall = false;

  for (let i = str.length - 1; i >= 0; i--) {
    // BLUE - R
    if (str[i] === 'R') wall = true;
    if (wall && str[i] === 'B') {
      count += 1;
    }
  }
  min = Math.min(count, min);
  count = 0;
}

makeCount(str);

console.log(min);
