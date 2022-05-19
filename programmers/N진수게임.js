function solution(n, t, m, p) {
  let acc = '';
  let num = 0;

  while (acc.length / m < t) {
    acc += num.toString(n / 10 < 1 ? n : 16);
    num += 1;
  }
  acc = acc.toUpperCase();
  console.log(acc);
  let result = '';
  let i = p - 1;
  let j = 0;
  while (i < acc.length) {
    result += acc[i];
    j += 1;
    i = j * m + p - 1;
  }
  return result.slice(0, t);
}

console.log(solution(16, 100, 100, 3));
