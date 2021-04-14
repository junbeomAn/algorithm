import sys
from copy import deepcopy
from collections import deque

input = sys.stdin.readline

N = int(input())
area = [list(map(int, input().split())) for _ in range(N)]
dx=[1,-1,0,0]
dy=[0,0,1,-1]
highest = 0
drown_area=0

for line in area:
	highest=max(highest, max(line))
# dfs로도 풀 수 있음 dfs풀이가 훨씬 빠름
def bfs(x,y,level,copyarea):
	q = deque([])
	q.append((x, y))

	while q:
		cx, cy = q.popleft()
		for i in range(4):
			nx=cx+dx[i]
			ny=cy+dy[i]
			if 0<=nx<N and 0<=ny<N and copyarea[nx][ny] > level:
				q.append((nx,ny))
				copyarea[nx][ny] = level

sarea = 1
for i in range(1, highest + 1):
	copyarea=deepcopy(area)
	cnt=0
	for x in range(N):
		for y in range(N):
			if copyarea[x][y] > i:
				cnt += 1
				bfs(x,y,i,copyarea)
	sarea=max(cnt,sarea)

print(sarea)

