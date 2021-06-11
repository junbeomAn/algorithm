const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const info = input.slice(1).map(v => v.split(" ").map(Number))

let answer = '';

for (let i = 0; i < info.length; i++) {
  let count = 0;
  for (let j = 0; j < info.length; j++) {
    if (info[i][0] < info[j][0] && info[i][1] < info[j][1]) {
      count++;
    }
  }
  answer += (count + 1) + " ";
}
console.log(answer.trim());
