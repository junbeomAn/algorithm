from collections import deque
n, k=map(int, input().split())
board=[list(map(int, input().split())) for _ in range(n)]
s, x, y=map(int, input().split())

virus=[]
for i in range(n):
	for j in range(n):
		if board[i][j] != 0:
			virus.append((board[i][j], i, j))
virus.sort(key=lambda x: x[0])

def bfs(L):
	q=deque()
	ch=[[0]*n for _ in range(n)]
	dx=[-1, 0, 1, 0]
	dy=[0, 1, 0, -1]
	for v in virus:
		q.append(v)
	while True:
		if L==s:
			print(board[x-1][y-1])
			break
		size=len(q)
		for _ in range(size):
			num, cx, cy=q.popleft()
			for i in range(4):
				nx=cx+dx[i]
				ny=cy+dy[i]
				if 0<=nx<n and 0<=ny<n and ch[nx][ny]==0 and board[nx][ny]==0:
					ch[nx][ny]=1
					board[nx][ny]=num
					q.append((num, nx, ny))
		L+=1
bfs(0)
