const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let i = 0;
const black = 'X';
const white = 'O';
const empt = '.';
const valid = 'valid';
const invalid = 'invalid';
const map = {};

const curr = Array(3)
  .fill(0)
  .map(_ => Array(3).fill('.'));
let res = invalid;

function recursion(acc, prevColor, space) {
  if (checkRows(acc)) {
    map[acc.map(l => l.join('')).join('')] = true;
    return;
  }
  if (space === 0) {
    map[acc.map(l => l.join('')).join('')] = true;
    return;
  }
  for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
      if (acc[m][n] !== empt) continue;
      if (prevColor === black) {
        acc[m][n] = white;
        recursion(acc, white, space - 1);
        acc[m][n] = empt;
      } else {
        acc[m][n] = black;
        recursion(acc, black, space - 1);
        acc[m][n] = empt;
      }
    }
  }
}
for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 3; y++) {
    curr[x][y] = black;
    recursion(curr, black, 8);
    curr[x][y] = empt;
  }
}

while (input[i] !== 'end') {
  if (map[input[i]]) {
    console.log(valid);
  } else {
    console.log(invalid);
  }
  i += 1;
}

function check(line) {
  const blackCnt = line.filter(c => c === black).length;
  const whiteCnt = line.filter(c => c === white).length;

  if (blackCnt === 3 || whiteCnt === 3) {
    return true;
  }
  return false;
}

function checkRows(status) {
  for (let i = 0; i < 3; i++) {
    // 가로
    const line = status[i];
    if (check(line)) {
      return true;
    }
  }
  for (let j = 0; j < 3; j++) {
    // 세로
    const line = [];
    for (let i = 0; i < 3; i++) {
      line.push(status[i][j]);
    }
    if (check(line)) {
      return true;
    }
  }
  let diagonal = [];
  diagonal.push(status[0][0], status[1][1], status[2][2]);

  if (check(diagonal)) {
    return true;
  }

  diagonal = [];
  diagonal.push(status[0][2], status[1][1], status[2][0]);

  if (check(diagonal)) {
    return true;
  }
  return false;
}
