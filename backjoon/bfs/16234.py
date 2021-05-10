from collections import deque

n, l, p=map(int, input().split())
board=[list(map(int, input().split())) for _ in range(n)]

def bfs(x, y, ch):
	q=deque()
	ally=[]
	q.append((x, y))
	ch[x][y]=1
	dx=[-1, 0, 1, 0]
	dy=[0, 1, 0, -1]

	ally.append((x, y))

	while q:
		cx, cy=q.popleft()

		for i in range(4):
			nx=cx+dx[i]
			ny=cy+dy[i]
			if 0<=nx<n and 0<=ny<n and ch[nx][ny]==0 and l<=abs(board[cx][cy]-board[nx][ny])<=p:
				q.append((nx, ny))
				ch[nx][ny]=1
				ally.append((nx, ny))
	nation_cnt=len(ally)
	s=0
	if nation_cnt > 1:
		for tx, ty in ally:
			s+=board[tx][ty]
		s=s//nation_cnt

		for tx, ty in ally:
			board[tx][ty]=s
		return 1
	else:
		return 0

cnt=0

while True:
	ch=[[0] * n for _ in range(n)]
	stop=0
	for i in range(n):
		for j in range(n):
			if ch[i][j]==0:
				bfs(i, j, ch)
				stop+=1
	if stop == n*n:
		break
	cnt+=1

print(cnt)


