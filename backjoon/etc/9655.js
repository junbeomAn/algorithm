const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

const n = +input;

if (n % 2 === 0) {
  console.log('CY');
} else {
  console.log('SK');
}
