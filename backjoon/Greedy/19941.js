const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// p 에서 먼 h 를 앞뒤 K 범위 내에서 찾는다.
// K ~ 1 까지의 범위 내에서 찾는다.

// (i - k) ~ (i + K)
const [N, K] = input[0].split(' ').map(Number);
const str = input[1];

let count = 0;
const used = Array(N).fill(false);

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'P') {
    for (let j = i - K; j <= i + K; j++) {
      if (str[j] === 'H' && !used[j]) {
        used[j] = true;
        count += 1;
        break;
      }
    }
  }
}
console.log(count);
