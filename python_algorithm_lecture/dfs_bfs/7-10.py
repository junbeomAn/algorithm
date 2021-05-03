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
cnt=0
ch[0][0]=1
def dfs(x,y):
	global cnt
	if x==6 and y==6:
		cnt+=1
		return
	for i in range(4):
		nx=x+dx[i]
		ny=y+dy[i]
		if 0<=nx<K and 0<=ny<K and ch[nx][ny]==0 and board[nx][ny]=="0":
			ch[nx][ny]=1
			dfs(nx,ny)
			ch[nx][ny]=0
dfs(0,0)
print(cnt)
