// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = `5 5 1
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
1 1 1 1 1
0 0 0 0 0`.split("\n");

const [N, M, D] = input[0].split(" ").map(Number);

const board = input.slice(1).map((r) => r.split(" ").map(Number));
const archers = [-1, -1, -1];
const enemies = [];

for (let i = N - 1; i >= 0; i--) {
  const row = board[i];

  row.forEach((v, j) => {
    if (v === 1) {
      enemies.push([i, j]);
    }
  });
}

let max = -1;

function recursion(cnt, n) {
  if (cnt === 3) {
    const cnt = search(
      enemies.slice(),
      archers.map((v) => [N, v])
    );
    max = cnt > max ? cnt : max;
    return;
  }

  for (let i = n; i < M; i++) {
    archers[cnt] = i;
    recursion(cnt + 1, i + 1);
  }
}
recursion(0, 0);
console.log(max);

function checkAttackable(x1, y1, x2, y2) {
  return getDist(x1, y1, x2, y2) <= D;
}
function getDist(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function search(enemies, archerLoc) {
  let removeCnt = 0;
  
  while (enemies.length) {

      while (enemies.length) {
    
        for (const [ax, ay] of archerLoc) {
            enemies.
          if (checkAttackable(cx, cy, ax, ay)) {
            
          } 
        }
      }
      
  }
  return removeCnt;
}
