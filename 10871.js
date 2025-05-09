const fs = require("fs");
const [first, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, x] = first.split(" ").map(Number);
const inputArr = input.trim().split(" ").map(Number);

const filtered = inputArr.filter((item) => item < x);
console.log(filtered.join(" "));
