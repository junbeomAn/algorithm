const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];
let i = 1;
let print = '';

while (i < input.length) {
  const n = +input[i++];
  const phoneBook = [];
  for (let j = i; j < i + n; j++) {
    phoneBook.push(input[j]);
  }
  i += n;

  let res = '';
  phoneBook.sort();
  for (let k = 0; k < phoneBook.length - 1; k++) {
    const curr = phoneBook[k];
    const next = phoneBook[k + 1];
    if (next.indexOf(curr) === 0) {
      res = 'NO';
      break;
    }
  }
  if (!res) res = 'YES';
  print += `${res}\n`;
}
console.log(print);
