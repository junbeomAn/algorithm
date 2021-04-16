import sys
sys.stdin=open("input.txt", "rt")

n = int(input())
a = [list(map(int, input().split())) for _ in range(5)]

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def rangeCheck(x, y):
	if 0<=x<n and 0<=y<n:
		return True
	return False
'''
all 사용 혹은 max도 사용가능
'''

cnt = 0
for i in range(n):
	for j in range(n):
		for k in range(len(dx)):
			nx = dx[k] + i
			ny = dy[k] + j
			if rangeCheck(nx, ny):
				if a[i][j] <= a[nx][ny]:
					break
		else:
			cnt += 1
print(cnt)
