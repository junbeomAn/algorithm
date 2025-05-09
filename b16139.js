var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0];
const appearCnt = Array(str.length)
  .fill(0)
  .map(() => Array(26).fill(0));
const q = input.slice(2).map((r) => r.split(" "));
// 97, 122

appearCnt[0][str[0].charCodeAt() - 97] = 1;

for (let i = 1; i < str.length; i++) {
  const char = str[i];
  appearCnt[i] = appearCnt[i - 1].slice();
  appearCnt[i][char.charCodeAt() - 97] += 1;
}
let res = "";

for (let i = 0; i < q.length; i++) {
  const [char, s, e] = q[i];

  if (s === "0") {
    res += appearCnt[e][char.charCodeAt() - 97] + "\n";
  } else {
    res +=
      appearCnt[e][char.charCodeAt() - 97] -
      appearCnt[s - 1][char.charCodeAt() - 97] +
      "\n";
  }
}

console.log(res.trim());
