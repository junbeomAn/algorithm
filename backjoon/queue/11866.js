const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let [N, K] = input.split(" ").map(Number)

let curr = 1;
const q = [];
let res = [];

for (let i = 1; i <= N; i++) {
	q.push(i);
}
while (q.length > 0) {
	if (curr === K) {
		res.push(q.shift());
		curr = 1;
	} else {
		q.push(q.shift());
		curr += 1;
	}
}

console.log(`<${res.join(", ")}>`)
