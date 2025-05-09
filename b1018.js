var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const board = input.slice(1);

const ex1 = `BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB`.split("\n");

const ex2 = `WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`.split("\n");

let min = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let changeCnt1 = 0;
    let changeCnt2 = 0;

    for (let x = i; x < i + 8; x++) {
      for (let y = j; y < j + 8; y++) {
        if (board[x][y] !== ex1[x - i][y - j]) {
          changeCnt1 += 1;
        }
        if (board[x][y] !== ex2[x - i][y - j]) {
          changeCnt2 += 1;
        }
      }
    }
    min = Math.min(changeCnt1, changeCnt2, min);
  }
}
console.log(min);
