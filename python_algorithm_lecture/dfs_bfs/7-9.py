import os
import sys
from collections import deque
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

K=7
q=deque([])
ch=[[0]*K for _ in range(K)]
dx=[1,-1,0,0]
dy=[0,0,1,-1]
board=[input().split() for _ in range(K)]
def bfs(x,y):
	q.append((x,y,0))
	ch[x][y]=1
	res=-1

	while q:
		cx,cy,cnt=q.popleft()
		if cx==K-1 and cy==K-1:
			if res==-1 or res>cnt:
				res=cnt
		for i in range(4):
			nx=cx+dx[i]
			ny=cy+dy[i]
			if 0<=nx<K and 0<=ny<K and ch[nx][ny]==0 and board[nx][ny]=="0" :
				ch[nx][ny]=1
				q.append((nx,ny,cnt+1))
	return res

print(bfs(0,0))
