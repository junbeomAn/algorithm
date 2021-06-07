function solution (arr) {
  const answer = [0, 0];
  function recursion (len, x, y) {
    let sum = 0;

    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        sum += arr[i][j];
      }
    }

    if (sum === len ** 2 || sum === 0) {
      if (sum === len ** 2) {
        answer[1] += 1;
      } else {
        answer[0] += 1;
      }
    } else {
      const newLen = Math.floor(len / 2);
      recursion(newLen, x, y);
      recursion(newLen, x + newLen, y);
      recursion(newLen, x, y + newLen);
      recursion(newLen, x + newLen, y + newLen);
    }
  }
  recursion(arr.length, 0, 0);

  return answer;
};
