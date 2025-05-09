var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cols = input.slice(1).map((r) => r.split(" ").map(Number));

cols.sort((a, b) => a[0] - b[0]);
const start = cols[0][0];
const end = cols[cols.length - 1][0];
const pillars = Array(end + 1).fill(null);

for (const [L, H] of cols) {
  pillars[L] = H;
}

const s1 = [];
const s2 = [];

const cp = cols.slice();
cp.sort((a, b) => b[1] - a[1]);

const tallest = cp[0];
let sum = 0;
let i = cols[0][0] + 1;
s1.push(cols[0]);

while (s1[s1.length - 1][1] !== tallest[1]) {
  const top = s1[s1.length - 1];
  const curr = pillars[i];

  if (curr && curr > top[1]) {
    // 기둥이 스택의 top 보다 크면
    // 현재까지 넓이 누적시킨다 + push
    const prevIdx = top[0];
    const diff = i - prevIdx;
    sum += diff * top[1];

    s1.push([i, curr]);
  } else {
    // 기둥이 스택의 top 보다 작거나 같으면 다음걸로 넘어간다
    i += 1;
  }
}

i = cols[cols.length - 1][0] - 1;
s2.push(cols[cols.length - 1]);

while (s2[s2.length - 1][1] !== tallest[1]) {
  const top = s2[s2.length - 1];
  const curr = pillars[i];

  if (curr && curr > top[1]) {
    // 기둥이 스택의 top 보다 크면
    // 현재까지 넓이 누적시킨다 + push
    const prevIdx = top[0];
    const diff = Math.abs(i - prevIdx);
    sum += diff * top[1];

    s2.push([i, curr]);
  } else {
    // 기둥이 스택의 top 보다 작거나 같으면 다음걸로 넘어간다
    i -= 1;
  }
}
const leftTop = s1[s1.length - 1];
const rightTop = s2[s2.length - 1];

sum += tallest[1] * (rightTop[0] - leftTop[0] + 1);
console.log(sum);
