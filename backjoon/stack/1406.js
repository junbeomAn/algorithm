const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// B, D, L, P
const left = input[0].split('');
const right = [];

const m = +input[1];

// B left에서 pop
// D right에서 pop, left에 push
// L left에서 pop, right에 push
// P left에 push

for (let i = 2; i <= m + 1; i++) {
  const cmd = input[i];

  if (cmd.length > 1) {
    // p
    const [c, v] = cmd.split(' ');
    left.push(v);
  } else {
    // L D B
    if (cmd === 'B') {
      left.pop();
    } else if (cmd === 'D') {
      const v = right.pop();
      if (v) left.push(v);
    } else if (cmd === 'L') {
      const v = left.pop();
      if (v) right.push(v);
    }
  }
}

while (right.length) {
  left.push(right.pop());
}
console.log(left.join(''));
