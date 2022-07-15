const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const nums = input[1].split(' ').map(Number);

const max = Math.max(...nums);
const min = Math.min(...nums);

console.log(max * min);
