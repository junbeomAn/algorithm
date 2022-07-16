const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];

function isPalindrome(n) {
  const str = `${n}`;
  const len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isPrime(n) {
  if (n === 1) return false;

  const end = Math.sqrt(n) + 1;
  for (let i = 2; i < end + 1; i++) {
    if (n !== i && n % i === 0) {
      return false;
    }
  }
  return true;
}

while (true) {
  if (isPalindrome(n) && isPrime(n)) {
    console.log(n);
    break;
  }
  n += 1;
}
