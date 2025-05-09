var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const S = input.slice(1).map((r) => r.split(" ").map(Number));

const visited = Array(N).fill(false);

let min = Infinity;

function Combi(n) {
  if (n === N) {
    calcTeamStat();
    return;
  }

  visited[n] = true;
  Combi(n + 1);
  visited[n] = false;
  Combi(n + 1);
}
Combi(0);

console.log(min);

function calcTeamStat() {
  let sscore = 0;
  let lscore = 0;

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (visited[i] && visited[j]) {
        sscore += S[i][j] + S[j][i];
      } else if (!visited[i] && !visited[j]) {
        lscore += S[i][j] + S[j][i];
      }
    }
  }

  min = min > Math.abs(sscore - lscore) ? Math.abs(sscore - lscore) : min;
}
