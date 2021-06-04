const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const pairs = {
	")": "(",
	"]": "["
}

function checkValid(str) {
	const stack = [];

	for (let i = 0; i < str.length; i++) {
		const c = str[i];

		if (c === "(" || c === "[") {
			stack.push(c);
		} else if (c === ")" || c === "]") {
			if (stack.pop() !==	pairs[c]) {
				return false;
			}
		}
	}
	if (stack.length === 0) {
		return true;
	}
	return false;
}

for (let i = 0; i < input.length - 1; i++) {
	const str = input[i];
	if (checkValid(str)) {
		console.log("yes");
	} else {
		console.log("no");
	}
}

