const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1);

function checkRange (x, y) {
	if ((0 <= x && x < N) && (0 <= y && y < M)) {
		return true;
	}
	return false
}

function bfs(x, y) {
	const visited = Array(N).fill(0).map(_ => Array(M).fill(0))
  const q = [];
	const dx = [-1, 0, 1, 0];
	const dy = [0, 1, 0, -1];

	q.push([x, y, 1]);
	visited[x][y] = 1;

	while (q.length > 0) {
		const [cx, cy, dist] = q.shift();

		if (cx === N-1 && cy === M-1) {
			return dist;
		}

		for (let i = 0; i < 4; i++) {
			const nx = dx[i] + cx;
			const ny = dy[i] + cy;

			if (checkRange(nx, ny) && !visited[nx][ny] && map[nx][ny] === '1') {
				visited[nx][ny] = 1;
				q.push([nx, ny, dist+1]);
			}
		}
	}
}

console.log(bfs(0,0));
