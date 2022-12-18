var fs = require('fs');
var input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let i = 0;

while (true) {
  const [a, b, c] = input[i++].split(' ').map(Number);
  if (a === 0 && b === 0 && c === 0) break;

  const max = Math.max(a, b, c);
  const sum = a + b + c;

  if (a === b && b === c) {
    console.log('Equilateral');
  } else if (max >= sum - max) {
    console.log('Invalid');
  } else if (a !== b && b !== c && c !== a) {
    console.log('Scalene');
  } else if (a === b || b === c || c === a) {
    console.log('Isosceles');
  }
}
