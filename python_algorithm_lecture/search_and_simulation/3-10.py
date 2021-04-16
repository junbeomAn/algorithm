import sys
sys.stdin=open("input.txt", "rt")

n = 9
a = [list(map(int, input().split())) for _ in range(9)]


def solution():
	for i in range(n):
		h = [0] * 9
		v = [0] * 9
		for j in range(n):
			if h[a[i][j] - 1] == 0 and v[a[j][i] - 1] == 0:
				h[a[i][j] - 1] = 1
				v[a[j][i] - 1] = 1
			else:
				return "NO"

	for i in range(0, n, 3):
		for j in range(0, n, 3):
			sq = [0] * 9
			for x in range(3):
				for y in range(3):
					if sq[a[i + x][j + y] - 1] == 0:
						sq[a[i + x][j + y] - 1] = 1
					else:
						return "NO"
	return "YES"

print(solution())
