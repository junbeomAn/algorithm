const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, k] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const robots = Array(2 * n).fill(false);

let level = 1;

while (true) {
  // rotate A
  const r = A.pop();
  A.unshift(r);
  // rotate robots
  const rr = robots.pop();
  robots.unshift(rr);
  // remove robot if robot on N position
  robots[n - 1] = false;

  // move robots from top if possible(no robot on next pos, A[pos] !== 0)
  const first = robots[0];

  if (robots[robots.length - 1] && robots[0] === false && A[0] > 0) {
    robots[0] = true;
    robots[robots.length - 1] = false;
    A[0] -= 1;
  }
  for (let i = robots.length - 2; i > 0; i--) {
    if (robots[i] && robots[i + 1] === false && A[i + 1] > 0) {
      robots[i + 1] = true;
      robots[i] = false;
      A[i + 1] -= 1;
    }
  }
  if (first && robots[1] === false && A[1] > 0) {
    robots[1] = true;
    robots[0] = false;
    A[1] -= 1;
  }

  // after robot move, reduce A.
  // remove robot on N position
  robots[n - 1] = false;

  // add robot on 1 position if A[pos] !== 0
  if (A[0] > 0) {
    robots[0] = true;
    A[0] -= 1;
  }
  // A[pos] === 0 count >= k, then break.
  const c = A.filter(v => v === 0).length;
  if (c >= k) {
    break;
  }
  level += 1;
}

console.log(level);
