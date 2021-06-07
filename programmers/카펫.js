function solution (brown, yellow) {
  // 시간복잡도 O(N), 공간 복잡도 O(1) ?
  // 가로 혹은 세로의 길이 후보에 대해서 완전탐색하면서, 노란부분의 넓이를 나눴을 때 나머지가 0인
  // i를 찾아서 갈색 부분의 가로 세로 길이를 구하여 현재 값으로 갈색 부분의 넓이가 구해지는지 확인하는
  // 방식으로 카펫의 가로 세로 길이를 찾는다.

  // yellow 가 1이라면 3 x 3 크기의 카펫을 얘기하는것이므로 바로 리턴.
  if (yellow === 1) {
    return [3, 3];
  }
  // 노란 부분의 수직, 수평 길이(세로, 가로)
  let brownVer = 0; // Vertical
  let brownHor = 0; // Horizontal

  // 노란 부분의 (갯수 / 2) 만큼 순회(그 이상은 나누어 지지 않으므로 불필요)하면서 세로의 길이 i를 찾음.
  for (let i = 1; i <= yellow / 2; i++) {
    // 세로의 길이 후보 중 하나를 찾게되면
    if (yellow % i === 0) {
      // 세로의 길이 + 2 이면 전체 카펫의 세로길이를 의미
      brownVer = i + 2;
      // yellow / i === 가로 길이, 가로길이 + 2 이면 전체 카펫 가로 길이
      brownHor = (yellow / i) + 2;
      // 세로 * 가로 - 노란부분 === 갈색 부분 수 일 경우 실제 가로, 세로를 찾은것
      if ((brownVer * brownHor - yellow) === brown) {
        return [brownHor, brownVer];
      }
    }
  }
};
