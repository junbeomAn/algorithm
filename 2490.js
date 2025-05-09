const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const getResult = (yuts) => {
  const alphas = ["D", "C", "B", "A", "E"];
  const sum = yuts.reduce((acc, v) => acc + v, 0);

  return alphas[sum];
};

input.forEach((item) => {
  const yuts = item.split(" ").map(Number);
  console.log(getResult(yuts));
});
