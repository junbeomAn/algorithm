function contains(a, b) {
  a.sort();
  b.sort();
  if (a.length > b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) return false;
  }
  return true;
}

function solution(n, plans, clients) {
  plans.forEach((plan, i) => {
    const [data, ...services] = plan.split(' ').map(Number);
    if (i > 0) {
      plans[i] = [data, [...services, ...plans[i - 1][1]]];
    } else {
      plans[i] = [data, services];
    }
  });
  clients.forEach((client, i) => {
    const [data, ...services] = client.split(' ').map(Number);
    clients[i] = [data, services];
  });

  function bSearch(needData, needServices) {
    let left = 0;
    let right = plans.length - 1;
    let mid;
    let prev = -1;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      const [provideData, provideService] = plans[mid];

      if (provideData < needData) {
        left = mid + 1;
      } else if (provideData >= needData) {
        if (contains(needServices, provideService)) {
          prev = mid;
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return prev;
  }
  const answer = [];

  clients.forEach((client) => {
    const [data, services] = client;
    const index = bSearch(data, services);

    if (index !== -1) {
      answer.push(index + 1);
    } else {
      answer.push(0);
    }
  });
  return answer;
}

console.log(
  solution(4, ['38 2 3', '394 1 4'], ['10 2 3', '300 1 2 3 4', '500 1'])
);

// console.log(contains([3, 5], [1, 3, 4, 5]));
