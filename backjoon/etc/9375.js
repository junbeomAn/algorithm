const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function getCombination (clothes) {
  let answer = 0;
  const closet = clothes.reduce((acc, v) => {
    if (!acc[v[1]]) {
      acc[v[1]] = 1;
    } else {
      acc[v[1]]++;
    }
    return acc;
  }, {});

  answer = Object.keys(closet).reduce((acc, part) => acc * (closet[part] + 1), 1) - 1;
  return answer;
};
let i = 1;

while (i < input.length) {
  const count = Number(input[i]);

  if (!Number.isNaN(count)) {
    const clothes = [];
    for (let j = 1; j <= count; j++) {
      clothes.push(input[i + j].split(' '));
    }
    console.log(getCombination(clothes));
    i += count;
  }
  i++;
}




