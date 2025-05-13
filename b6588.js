var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cases = input.map(Number);
cases.pop();

const N = 1000000;

function getPrimes(n) {
  const nums = Array(n + 1)
    .fill(0)
    .map((_, i) => i);

  for (let i = 2; i <= n; i++) {
    if (nums[i] !== 0) {
      for (let j = i + i; j <= n; j += i) {
        nums[j] = 0;
      }
    }
  }
  nums[0] = 0;
  nums[1] = 0;

  return nums;
}

const primes = getPrimes(N);
const onlyPrimes = primes.filter((n) => n !== 0);

let res = "";

cases.forEach((n) => {
  for (let i = 0; i < onlyPrimes.length; i++) {
    const gap = n - onlyPrimes[i];
    if (primes[gap]) {
      res += `${n} = ${onlyPrimes[i]} + ${gap}\n`;
      break;
    } else {
      if (i === onlyPrimes.length - 1) {
        res += `Goldbach's conjecture is wrong.\n`;
      }
    }
  }
});
console.log(res.trim());
