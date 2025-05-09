var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const currLine = input[1].split(" ").map(Number);

let nextSeq = 1;
const stack = [];

while (currLine.length) {
  const s = currLine.shift() || stack.shift();

  if (nextSeq === s) {
    nextSeq += 1;
  } else {
    while (stack[stack.length - 1] === nextSeq) {
      stack.pop();
      nextSeq += 1;
    }
    stack.push(s);
  }
}
while (stack[stack.length - 1] === nextSeq) {
  stack.pop();
  nextSeq += 1;
}
console.log(stack.length === 0 ? "Nice" : "Sad");
