var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const pNums = input.slice(1).map((r) => r.split(" ").map(Number));

const N = 10001;
const primes = Array(N).fill(true);
primes[0] = false;
primes[1] = false;

for (let i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
  if (primes[i]) {
    for (let j = i * i; j <= N; j += i) {
      primes[j] = false;
    }
  }
}

pNums.forEach(([primeNum, target]) => {
  let min = -1;
  const visited = Array(N).fill(false);
  const q = [];

  q.push([primeNum.toString().split("").map(Number), 0]);
  visited[primeNum] = true;

  while (q.length) {
    const [currNum, cnt] = q.shift();

    const newNum = Number(currNum.join(""));
    if (newNum === target) {
      min = min === -1 || min > cnt ? cnt : min;
    }

    for (let j = 0; j < 4; j++) {
      // 숫자
      for (let i = 0; i < 10; i++) {
        // 자리
        if (j === 0 && i === 0) continue;

        const cp = currNum.slice();

        cp[j] = i;
        const num = Number(cp.join(""));

        if (primes[num] === true && !visited[num]) {
          visited[num] = true;
          q.push([cp, cnt + 1]);
        }
      }
    }
  }

  console.log(min === -1 ? "Impossible" : min);
});
