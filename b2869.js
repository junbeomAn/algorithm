var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

const [A, B, V] = input.split(" ").map(Number);

console.log(Math.ceil((V - B) / (A - B)));
