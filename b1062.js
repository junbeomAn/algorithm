var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

let words = input.slice(1);
const selected = new Set([97, 110, 116, 99, 105]);
let max = -Infinity;

if (5 > K) {
  console.log(0);
} else {
  words = words.map((word) => word.slice(4, word.length - 4));

  function recursion(n) {
    if (selected.size === K) {
      let cnt = 0;
      for (const word of words) {
        let isReadable = true;
        for (let i = 0; i < word.length; i++) {
          if (!selected.has(word[i].charCodeAt())) {
            isReadable = false;
            break;
          }
        }
        if (isReadable) {
          cnt += 1;
        }
      }
      max = max < cnt ? cnt : max;
      return;
    }
    if (n > 25) {
      return;
    }

    // 97
    const charCode = 97 + n;

    if (!selected.has(charCode)) {
      selected.add(charCode);
      recursion(n + 1);
      selected.delete(charCode);
    }
    recursion(n + 1);
  }
  recursion(0);
  console.log(max);
}
