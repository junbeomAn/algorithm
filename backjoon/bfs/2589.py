import sys
from collections import deque
input=sys.stdin.readline

N, M = map(int, input().split())
jido = [input().rstrip() for _ in range(N)]
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]


def check_range(x, y):
	if 0<=x<N and 0<=y<M:
		return True
	return False

def solution(x, y):
	if jido[x][y] == 'W':
		return 0

	q = []
	q = deque(q)
	q.append((x, y, 0))
	check = [[0] * M for _ in range(N)]
	check[x][y] = 1
	max_value = 0

	while q:
		cx, cy, cost = q.popleft()
		max_value = max(cost, max_value)

		for i in range(4):
			nx = cx + dx[i]
			ny = cy + dy[i]
			if  check_range(nx, ny) and jido[nx][ny] == 'L' and check[nx][ny] == 0:
				check[nx][ny] = 1
				q.append((nx, ny, cost + 1))
	return max_value
res = 0
for i in range(N):
	for j in range(M):
		res = max(res, solution(i, j))

print(res)
