import sys
from collections import deque
lst=[]
n, m=map(int, input().split())
board=[list(map(int, input().split())) for _ in range(n)]
virus_location=[]
safe_cnt=0

for i in range(n):
	for j in range(m):
		if board[i][j]==0:
			lst.append((i, j))
			safe_cnt+=1
		if board[i][j]==2:
			virus_location.append((i, j))

def dfs(L, x):
	if L==3:
		return bfs(safe_cnt-3)
	else:
		res=0
		for i in range(x, len(lst)):
			x, y=lst[i]
			board[x][y]=1
			res=max(res, dfs(L+1, i+1))
			board[x][y]=0
	return res

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

print(dfs(0, 0))

