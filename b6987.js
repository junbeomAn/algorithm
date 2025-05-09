var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputs = input.map((r) => r.split(" ").map(Number));

const results = inputs.map((result) => {
  const nationResult = [];
  for (let i = 0; i < result.length; i += 3) {
    nationResult.push(result.slice(i, i + 3));
  }
  return nationResult;
});

let answers = [];
let ans = 0;

results.forEach((result) => {
  ans = 0;
  const isResultSumFive = result.reduce(
    (acc, row) => acc && row.reduce((acc, v) => acc + v, 0) === 5,
    true
  );

  function tryMatch(n, i, winIdx, lseIdx) {
    if (result[n][winIdx] > 0 && result[i][lseIdx] > 0) {
      result[n][winIdx] -= 1;
      result[i][lseIdx] -= 1;
      recursion(n, i + 1);
      result[n][winIdx] += 1;
      result[i][lseIdx] += 1;
    }
  }

  function recursion(n, i) {
    if (n === 5) {
      ans = 1;
      return;
    }

    if (i === 6) {
      recursion(n + 1, n + 2);
      return;
    }

    tryMatch(n, i, 0, 2);
    tryMatch(n, i, 1, 1);
    tryMatch(n, i, 2, 0);
  }

  if (isResultSumFive) {
    recursion(0, 1);
  }
  answers.push(ans);
});

console.log(answers.join(" "));
