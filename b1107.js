var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const target = +input[0];
const broken = input[2] ? input[2].split(" ").map(Number) : [];
const available = Array(10)
  .fill(0)
  .map((_, i) => i)
  .filter((v) => !broken.includes(v));

let cnt = Math.abs(100 - target);

for (let i = 0; i < 1_000_000; i++) {
  const channel = i.toString().split("");

  const isValid = channel.every((v) => available.includes(+v));
  if (isValid) {
    cnt = Math.min(cnt, channel.length + Math.abs(i - target));
  }
}

console.log(cnt);

/**
 * const target = +input[0];
const broken = input[2] ? input[2].split(" ").map(Number) : [];
const available = Array(10)
  .fill(0)
  .map((_, i) => i)
  .filter((v) => !broken.includes(v));

let cnt = Math.abs(100 - target);

function dfs(channel) {
  if (channel) {
    cnt = Math.min(cnt, channel.length + Math.abs(channel - target));
  }

  if (channel.length > `${target}`.length) {
    return;
  }
  for (const btn of available) {
    if (channel === "0") continue;
    dfs(channel + btn);
  }
}

dfs("", 0);

console.log(cnt);


 */
