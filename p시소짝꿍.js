function solution(weights) {
  const counts = Array(1001).fill(0);
  let answer = 0;

  for (let i = 0; i < weights.length; i++) {
    counts[weights[i]] += 1;
  }

  for (let i = 100; i <= 1000; i++) {
    for (let j = i; j <= 1000; j++) {
      answer += i === j ? (counts[i] * (counts[i] - 1)) / 2 : 0;
      answer += i * 2 === j * 3 ? counts[i] * counts[j] : 0;
      answer += i * 3 === j * 2 ? counts[i] * counts[j] : 0;
      answer += i * 2 === j * 4 ? counts[i] * counts[j] : 0;
      answer += i * 4 === j * 2 ? counts[i] * counts[j] : 0;
      answer += i * 3 === j * 4 ? counts[i] * counts[j] : 0;
      answer += i * 4 === j * 3 ? counts[i] * counts[j] : 0;
    }
  }
  return answer;
}
