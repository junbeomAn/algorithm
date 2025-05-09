var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const box = input.slice(1).map((r) => r.split(""));

// 한 지점을 정하고
// 4방향으로 돌면서 한번 바꾸고 전체 8줄 가장 max 연속 같은 색인것 저장

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
let max = 1;

function solution() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < 4; k++) {
        const ni = dx[k] + i;
        const nj = dy[k] + j;

        if (!(0 <= ni && ni < N && 0 <= nj && nj < N)) continue;

        if (box[i][j] !== box[ni][nj]) {
          swap(box, i, j, ni, nj);

          const tmpMax = check(box);
          max = Math.max(tmpMax, max);
          swap(box, i, j, ni, nj);
        }
        if (max === N) {
          return max;
        }
      }
    }
  }
  return max;
}
// console.log(check(box));
max = Math.max(check(box), max);
console.log(solution());

function check(board) {
  let max = 1;
  for (let i = 0; i < board.length; i++) {
    let last = null;
    let cnt = 1;
    for (let j = 0; j < board.length; j++) {
      if (last) {
        if (last === board[i][j]) {
          cnt += 1;
          max = Math.max(cnt, max);
        } else {
          cnt = 1;
          last = board[i][j];
        }
      } else {
        last = board[i][j];
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    let last = null;
    let cnt = 1;
    for (let j = 0; j < board.length; j++) {
      if (last) {
        if (last === board[j][i]) {
          cnt += 1;
          max = Math.max(cnt, max);
        } else {
          cnt = 1;
          last = board[j][i];
        }
      } else {
        last = board[j][i];
      }
    }
  }

  return max;
}
function swap(board, x1, y1, x2, y2) {
  const temp = board[x1][y1];
  board[x1][y1] = board[x2][y2];
  board[x2][y2] = temp;
}
