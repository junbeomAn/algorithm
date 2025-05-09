var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M, B] = input[0].split(" ").map(Number);

const base = input.slice(1).map((r) => r.split(" ").map(Number));
const maxHeight = 256;
let currHeightBlocks = 0;

for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    currHeightBlocks += base[x][y];
  }
}

let minTime = Infinity;
let height = 0;

for (let i = 0; i <= maxHeight; i++) {
  const targetHeightBlocks = i * N * M;

  if (targetHeightBlocks - currHeightBlocks > B) {
    continue;
  }

  let time = 0;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (base[x][y] < i) {
        time += i - base[x][y];
      } else if (base[x][y] > i) {
        time += (base[x][y] - i) * 2;
      }
    }
  }
  if (time <= minTime) {
    minTime = time;
    height = i;
  }
}
console.log(`${minTime} ${height}`);
