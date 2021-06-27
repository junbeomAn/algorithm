function countPeople (times, spendTime) {
  let res = 0;
  for (const time of times) {
    res += Math.floor(spendTime / time);
  }

  return res;
}

function solution (n, times) {
  // 시간 복잡도 N * log N , 공간 복잡도 N
  // 먼저 구해야하는 것이 '모든 사람이 심사를 받는데 걸리는 시간의 최솟값' 이므로 times 배열에 담긴 각 심사관의 심사에 걸리는 시간에 대하여 이분탐색을 수행하기로한다.
  // 이분탐색은 정렬된 데이터에 사용할때 유효하므로 times 배열을 오름차순으로 정렬.
  times.sort((a, b) => a - b);
  let left = 0;
  let right = times[times.length - 1] * n;
  let answer = Number.MAX_SAFE_INTEGER;
  let mid;
  let people;

  // mid 는 모든 사람이 심사를 받는데 걸리는 시간을 말한다.
  // people이 실제 검사 받은 사람 수보다 크면 mid를 줄이기 위해 탐색 범위의 최댓값을 줄이고
  // 작을 경우엔 mid 를 늘리기 위해 탐색 범위의 최솟값을 늘린다.
  // 최솟값을 구해야하기 때문에 n이 people과 같더라도 계속해서 탐색 범위의 최댓값을 줄여나가면서 최솟값을 찾는다.
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    people = countPeople(times, mid); // times 배열에 대하여 해당 mid에 의해 검사 받을 수 있는 사람 수.
    if (left === mid || right === mid) {
      break;
    }
    if (n <= people) {
      right = mid;
      answer = Math.min(answer, mid);
    } else if (n > people) {
      left = mid;
    }
  }
  return answer;
};
