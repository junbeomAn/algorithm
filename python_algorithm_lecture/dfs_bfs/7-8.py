import os
import sys
from collections import deque
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

def bfs(a,b,s,e):
	q.append((a,b))
	ch[a][b]=1
	while q:
		x,y=q.popleft()
		if y<=n//2:
			if s-y<x<s+y:
				res+=board[x][y]
		else:

		for i in range(4):
			nx=x+dx[i]
			ny=y+dy[i]
			if 0<=nx<n and 0<=ny<n and ch[nx][ny]==0:
				q.append((nx,ny))
				ch[nx][ny]=1

