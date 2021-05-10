# from itertools import combinations
import sys
from collections import Counter, deque
from itertools import chain

input=sys.stdin.readline
lst=[]
res=[(0,0)] * 3
combi=[]
n, m=map(int, input().split())
board=[list(map(int, input().split())) for _ in range(n)]
virus_location=[]

for i in range(n):
	for j in range(m):
		if board[i][j]==0:
			lst.append((i, j))
		if board[i][j]==2:
			virus_location.append((i, j))

def dfs(L, x):
	if L==3:
		combi.append(res[0:])
	else:
		for i in range(x, len(lst)):
			res[L]=lst[i]
			dfs(L+1, i+1)

def bfs(safe):
	q=deque()
	ch=[[0]*m for _ in range(n)]
	dx=[-1, 0, 1, 0]
	dy=[0, 1, 0, -1]
	for x, y in virus_location:
		q.append((x, y))
		ch[x][y]=1
	while q:
		cx, cy=q.popleft()
		for i in range(4):
			nx=dx[i]+cx
			ny=dy[i]+cy
			if 0<=nx<n and 0<=ny<m and ch[nx][ny]==0 and board[nx][ny]==0:
				ch[nx][ny]=1
				q.append((nx, ny))
				safe-=1
	return safe

dfs(0, 0)

safe_cnt=Counter(chain(*board))[0]
ans=0

for case in combi:
	change=[]

	for x, y in case:
		if board[x][y]==0:
			board[x][y]=1
			change.append((x, y))

	if len(change)==3:
		ans=max(ans, bfs(safe_cnt-3))
	for x, y in change:
		board[x][y]=0

print(ans)
