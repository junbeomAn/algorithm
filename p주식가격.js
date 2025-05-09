function solution(prices) {
  const stack = [];
  const ret = Array(prices.length).fill(0);

  stack.push([0, prices[0]]);

  for (let i = 1; i < prices.length; i++) {
    let top = stack[stack.length - 1];

    if (top[1] <= prices[i]) {
      stack.push([i, prices[i]]);
    } else {
      while (stack.length > 0 && top[1] > prices[i]) {
        const t = stack.pop();
        const gap = i - t[0];

        ret[t[0]] = gap;
        top = stack[stack.length - 1];
      }
      stack.push([i, prices[i]]);
    }
  }

  // remove remainings
  const [lastIdx] = stack.pop();

  while (stack.length) {
    const t = stack.pop();
    const gap = lastIdx - t[0];
    ret[t[0]] = gap;
  }
  return ret;
}
