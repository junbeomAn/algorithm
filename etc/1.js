function solution(p) {
  const n = p.length;
  const count = Array(n).fill(0);
  let minIdx = 0;

  for (let i = 0; i < n; i++) {
    minIdx = i;

    for (let j = i; j < n; j++) {
      if (p[j] < p[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      [p[i], p[minIdx]] = [p[minIdx], p[i]];
      count[i] += 1;
      count[minIdx] += 1;
    }
  }
  return count;
}
