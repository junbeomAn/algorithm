var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const nums = input[1].split(" ").map(Number);
let max = 0;

function recursion(arr, energy) {
  if (arr.length < 3) {
    max = energy > max ? energy : max;
    return;
  }

  for (let i = 1; i < arr.length - 1; i++) {
    const cp = arr.slice();

    cp.splice(i, 1);
    recursion(cp, arr[i - 1] * arr[i + 1] + energy);
  }
}

recursion(nums, 0);

console.log(max);
