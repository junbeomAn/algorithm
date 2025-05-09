var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, H] = input[0].split(" ").map(Number);
const horztls = input.slice(1).map((r) => r.split(" ").map(Number));
const board = Array(H)
  .fill(0)
  .map(() => Array(N).fill(0));
const newHorztls = [];
let min = -1;

for (const hls of horztls) {
  const [a, b] = hls.map((n) => n - 1);
  board[a][b] = 1;
}

for (let j = 0; j < H; j++) {
  for (let i = 0; i < N - 1; i++) {
    if (board[j][i] === 0) {
      newHorztls.push([j, i]);
    }
  }
}

recursion(0, 0);

console.log(min);

function recursion(addCnt, n) {
  if (addCnt > 3) {
    return;
  }
  if (check(board)) {
    min = min > addCnt || min === -1 ? addCnt : min;
  }
  if (n >= newHorztls.length) {
    return;
  }
  // if 추가한 가로선과 함께 i -> i 사다리가 만들어지면, 최소값 업데이트, return
  // 현재 가로선을 추가
  for (let i = n; i < newHorztls.length; i++) {
    const a = newHorztls[i][0];
    const b = newHorztls[i][1];

    const isNextLine = board[a][b + 1] === 1;
    //   const isLeftLine = board[a][b - 1] === 1;
    const isNoLine = board[a][b] === 0;

    if (isNoLine && !isNextLine) {
      board[a][b] = 1;
      // 추가 후 다음 가로선 재귀 시도
      recursion(addCnt + 1, i + 1);

      // 가로선 추가한것 삭제
      board[a][b] = 0;
    }
  }
}

function check(board) {
  // start
  for (let i = 0; i < board[0].length; i++) {
    let col = i;
    // nth row
    for (let j = 0; j < board.length; j++) {
      if (col > 0 && board[j][col - 1]) {
        col = col - 1;
      } else if (board[j][col]) {
        col = col + 1;
      }
    }
    if (col !== i) {
      return false;
    }
  }
  return true;
}
