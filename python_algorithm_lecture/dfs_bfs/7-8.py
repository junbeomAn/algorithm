import os
import sys
from collections import deque
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

n=int(input())
board=[list(map(int, input().split())) for _ in range(n)]
ch=[[0]*n for _ in range(n)]
acc=0
q=deque()
dx=[1, -1, 0, 0]
dy=[0, 0, 1, -1]

q.append((n//2, n//2))
ch[n//2][n//2]=1
acc+=board[n//2][n//2]
L=0
while True:
	if L==n//2:
		break
	size=len(q)
	for i in range(size):
		cx, cy=q.popleft()
		for j in range(4):
			nx=cx+dx[j]
			ny=cy+dy[j]

			if ch[nx][ny]==0:
				ch[nx][ny]=1
				acc+=board[nx][ny]
				q.append((nx, ny))
	L+=1
print(acc)
