import os
import sys
from collections import deque
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

n=int(input())
board=[list(map(int, input().split())) for _ in range(n)]
ch=[[0]*n for _ in range(n)]
dx=[1,-1,0,0]
dy=[0,0,1,-1]
cnt=0
start=[0,0]
end=[0,0]

for i in range(n):
	for j in range(n):
		v=board[i][j]
		if board[start[0]][start[1]] > v:
			start[0]=i
			start[1]=j
		if board[end[0]][end[1]] < v:
			end[0]=i
			end[1]=j
ch[start[0]][start[1]]=1

def dfs(x,y):
	global cnt
	if x==end[0] and y==end[1]:
		cnt+=1
		return
	for i in range(4):
		nx=x+dx[i]
		ny=y+dy[i]
		if 0<=nx<n and 0<=ny<n and ch[nx][ny]==0 and board[x][y] < board[nx][ny]:
			ch[nx][ny]=1
			dfs(nx,ny)
			ch[nx][ny]=0
dfs(start[0],start[1])
print(cnt)
