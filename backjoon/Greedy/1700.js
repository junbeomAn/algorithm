const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [hole, m] = input[0].split(' ').map(Number);
const order = input[1].split(' ');

const freq = new Map();
const multi = [];
let count = 0;
// 숫자의 빈도를 세어준다.
for (let i = 0; i < order.length; i++) {
  const num = order[i];
  const prev = freq.get(num);
  if (prev) {
    freq.set(num, prev + 1);
  } else {
    freq.set(num, 1);
  }
}
let currIndex = 0;

while (currIndex < order.length) {
  const t = order[currIndex];
  if (multi.length < hole) {
    const isExist = multi.indexOf(t) !== -1;
    if (!isExist) multi.push(t);
  } else {
    const isExist = multi.indexOf(t) !== -1;

    if (!isExist) {
      const i = getPriority(order, currIndex, multi);
      multi[i] = t;
      count += 1;
    }
  }
  const prev = freq.get(t);
  freq.set(t, prev - 1);
  currIndex += 1;
}
console.log(count);
function getPriority(order, currIndex, multi) {
  // checkNotExist
  const index = checkNotExist(order, currIndex, multi);
  if (index !== -1) {
    return index;
  }
  // getFarthest
  const farIndex = getFarthest(multi, currIndex, order);
  return farIndex;
  // getLowestFreq
}

function checkNotExist(order, fromIndex, multi) {
  for (let i = 0; i < multi.length; i++) {
    const using = multi[i];
    if (order.indexOf(using, fromIndex) === -1) {
      return i;
    }
  }
  return -1;
}
function getFarthest(multi, fromIndex, order) {
  let far = -1;

  for (let i = 0; i < multi.length; i++) {
    const using = multi[i];
    const idx = order.indexOf(using, fromIndex);

    if (far < idx) {
      far = idx;
    }
  }
  return multi.indexOf(order[far]);
}

// function getLowestFreq(freq, multi) {
//   let lowest = { value: Infinity, key: 0 };
//   for (const [k, v] of freq) {
//     if (lowest.value > v) {
//       lowest = { value: v, key: k };
//     }
//   }
//   return multi.indexOf(lowest.key);
// }
