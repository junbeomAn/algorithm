var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const innings = input.slice(1).map((row) => row.split(" ").map(Number));
const visited = Array(9).fill(false);
let max = -Infinity;
const order = Array(9).fill(0);
order[3] = 0;
visited[3] = true;

function getAttOrder(dpth) {
  if (dpth === 9) {
    execute(order);

    return;
  }

  for (let i = 0; i < 9; i++) {
    if (!visited[i]) {
      order[i] = dpth;
      visited[i] = true;
      getAttOrder(dpth + 1);
      visited[i] = false;
    }
  }
}

function execute(order) {
  let score = 0;
  let index = 0;

  for (let i = 0; i < innings.length; i++) {
    let outCnt = 0;
    let base1 = 0,
      base2 = 0,
      base3 = 0,
      home = 0;
    const inning = innings[i];

    while (outCnt < 3) {
      const attResult = inning[order[index % 9]];

      if (attResult === 1) {
        home = base3;
        base3 = base2;
        base2 = base1;
        base1 = 1;
      } else if (attResult === 2) {
        home = base3 + base2;
        base3 = base1;
        base2 = 1;
        base1 = 0;
      } else if (attResult === 3) {
        home = base3 + base2 + base1;
        base3 = 1;
        base2 = base1 = 0;
      } else if (attResult === 4) {
        home = base3 + base2 + base1 + 1;
        base3 = base2 = base1 = 0;
      } else {
        outCnt += 1;
      }

      score += home;
      home = 0;
      index += 1;

      if (outCnt === 3) {
        break;
      }
    }
  }

  max = score > max ? score : max;
}

getAttOrder(1);

console.log(max);
