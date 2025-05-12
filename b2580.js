var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const board = input.map((line) => line.split(" ").map(Number));

const N = board.length;
const empties = [];
let finish = false;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 0) {
      empties.push([i, j]);
    }
  }
}

sudoku(0);

function sudoku(cursorIdx) {
  if (finish) {
    return;
  }

  if (empties.length === cursorIdx) {
    console.log(board.map((line) => line.join(" ")).join("\n"));
    finish = true;
    return;
  }

  for (let k = 1; k <= 9; k++) {
    const nx = empties[cursorIdx][0];
    const ny = empties[cursorIdx][1];

    if (isVerticalHorizontalOk(nx, ny, k) && isThreeByThreeOk(nx, ny, k)) {
      board[nx][ny] = k;
      sudoku(cursorIdx + 1);
      if (finish) {
        return;
      }
      board[nx][ny] = 0;
    }
  }
}

function isVerticalHorizontalOk(x, y, v) {
  for (let k = 0; k < 9; k++) {
    if (board[k][y] === v || board[x][k] === v) {
      return false;
    }
  }
  return true;
}

function isThreeByThreeOk(x, y, v) {
  const xStart = Math.floor(x / 3) * 3;
  const yStart = Math.floor(y / 3) * 3;

  for (let i = xStart; i < xStart + 3; i++) {
    for (let j = yStart; j < yStart + 3; j++) {
      if (board[i][j] === v) {
        return false;
      }
    }
  }
  return true;
}
