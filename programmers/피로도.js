function tryDungeon(order, k) {
  let count = 0;

  for (let i = 0; i < order.length; i++) {
    const [min, cost] = order[i];
    if (min > k) {
      continue;
    }
    k -= cost;
    count += 1;
  }
  return count;
}

function solution(k, dungeons) {
  let max = 0;
  let visit = Array(dungeons.length).fill(false);

  function permutation(L, order) {
    if (L === dungeons.length) {
      const count = tryDungeon(order, k);
      max = Math.max(max, count);
      return;
    }

    for (let i = 0; i < dungeons.length; i++) {
      if (!visit[i]) {
        visit[i] = true;
        permutation(L + 1, [...order, dungeons[i]]);
        visit[i] = false;
      }
    }
  }
  permutation(0, []);
  return max;
}
