function solution (n) {
  // 시간 복잡도 O(N), 공간 복잡도 O(1) ?

  let a = 0; // f(0) = 0
  let b = 1; // f(1) = 1
  const start = 2; // f(2) = f(1) + f(0) 이 성립. f(n) = f(n-1) + f(n-2).
  const N = 1234567;
  // f(2) 부터 해서 b에는 큰수 a에는 작은수를 각각 저장하여
  for (let i = start; i <= n; i++) {
    // b 에는 b + a, a에는 b가 들어간다. 즉 fn = fn-1 + fn-2  => fn = a+b, fn-1 = b
    [b, a] = [(a + b) % N, b % N];
  }
  return b % N;
};
