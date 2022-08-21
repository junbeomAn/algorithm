const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const [N, K] = input.map(Number);
const visit = Array.from({ length: 100001 }, () => false);

function bfs(N) {
  const queue = [];
  queue.push([N, 0]);
  visit[N] = true;

  while (queue.length) {
    const [cur, time] = queue.shift();

    if (cur === K) return time;

    for (next of [cur * 2, cur - 1, cur + 1]) {
      if (!visit[next] && 0 <= next && next <= 100000) {
        visit[next] = true;

        if (next == cur * 2) {
          queue.unshift([next, time]);
        } else {
          queue.push([next, time + 1]);
        }
      }
    }
  }
}
console.log(bfs(N));
