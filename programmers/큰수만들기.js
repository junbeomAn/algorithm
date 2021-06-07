function solution (number, k) {
  // number의 숫자들을 차례로 스택에 넣는다.
  // 스택에 들어있는 top이 만약 현재 수보다 작으면 pop (계속)
  // 그러다가 k만큼 팝하면 그대로 다 넣는다.
  const s = [];

  for (let i = 0; i < number.length; i++) {
    const num = +number[i];

    if (k === 0) {
      s.push(num);
    } else {
      if (s.length > 0) {
        while ((s[s.length - 1] < num) && k > 0) {
          s.pop();
          k--;
        }
      }
      s.push(num);
    }
  }

  return s.slice(0, s.length - k).join('');
};
