// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const [N, M] = input[0].split(" ").map(Number);

// const table = input.slice(1, 1 + N).map((r) => r.split(" ").map(Number));
// const sum = Array(N)
//   .fill(0)
//   .map(() => Array(N).fill(0));

// for (let i = 0; i < N; i++) {
//   sum[i][0] = table[i][0];
// }
// for (let i = 0; i < N; i++) {
//   for (let j = 1; j < N; j++) {
//     sum[i][j] = sum[i][j - 1] + table[i][j];
//   }
// }

// for (let i = 0; i < N; i++) {
//   for (let j = 1; j < N; j++) {
//     sum[j][i] = sum[j - 1][i] + sum[j][i];
//   }
// }

// let res = "";
// for (let i = 1 + N; i < input.length; i++) {
//   const [x1, y1, x2, y2] = input[i].split(" ").map((n) => Number(n) - 1);
//   if (x1 === 0 && y1 === 0) {
//     res += sum[x2][y2] + "\n";
//   } else if (x1 === x2 && y1 === y2) {
//     res += table[x2][y2] + "\n";
//   } else {
//     res +=
//       sum[x2][y2] -
//       sum[x2][y1 > 0 ? y1 - 1 : y1] -
//       sum[x1 > 0 ? x1 - 1 : x1][y2] +
//       sum[x1 > 0 ? x1 - 1 : x1][y1 > 0 ? y1 - 1 : y1] +
//       "\n";
//   }
//   //   console.log(
//   //     sum[x2][y2],
//   //     sum[x2][y1 > 0 ? y1 - 1 : y1],
//   //     sum[x1 > 0 ? x1 - 1 : x1][y2],
//   //     sum[x1 > 0 ? x1 - 1 : x1][y1 > 0 ? y1 - 1 : y1]
//   //   );
// }
// console.log(res.trim());
