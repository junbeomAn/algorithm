function getYaksu(num) {
  const yaksu = [];

  for (let i = 2; i <= num; i++) {
      if (num === 1) break;

      while (num % i === 0) {
          yaksu.push(i);
          num /= i;
      }
  }
  return yaksu;
}

function countNum(yaksu) {
  const res = {};

  yaksu.forEach(n => {
      if (!res[n]) {
          res[n] = 1;
      } else{
          res[n] += 1;
      }
  })
  return res;
}

function solution(arr) {
  arr.sort((a, b) => a - b);
  const res = {};
  for (let i = 0; i < arr.length; i++) {
      // getYaksu
      const yaksu = getYaksu(arr[i]);
      // countNum in object
      const countObj = countNum(yaksu);
      // loop on object and add to res.
      // if exists, compare count and cover it with bigger one
      for (const num of Object.keys(countObj)) {
          if (res[num]) {
              res[num] = res[num] < countObj[num] ? countObj[num] : res[num];
          } else {
              res[num] = countObj[num];
          }
      }
  }

  return Object.keys(res).reduce((result, num) => result * Number(num) ** res[num], 1);
}
