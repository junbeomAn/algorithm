const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// 5 + 4 + 3 + 2 + 1 === 15

const N = +input[0];
const nums = input[1].split(' ').map(Number);
const vis = Array(100001).fill(0);
let st = 0,
  end = 0;
/**
 * st, end = 0 시작
 * st ~ end 의 모든수가 더이상 유니크하지 않기 전까지만 end 를 증가
 * end 증가시키는 동안, 현재 구성하는 수를 배열에 저장.
 * 중복이 생기면 st 증가. 구성하는 숫자에서 제외
 * 결과 += (end - st + 1)
 *
 */
let ans = 0;
vis[nums[st]] = 1;

while (true) {
  while (!vis[nums[end + 1]] && end < N - 1) {
    end += 1;
    vis[nums[end]] = 1;
  }

  ans += end - st + 1;
  if (st >= N - 1 && end >= N - 1) break;

  vis[nums[st]] = 0;
  st += 1;
}
console.log(ans);
