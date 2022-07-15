const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];

const words = input.slice(1);

words.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
});
console.log(words[0]);
let prev = words[0];
for (let i = 1; i < n; i++) {
  if (prev !== words[i]) {
    console.log(words[i]);
  }
  prev = words[i];
}
