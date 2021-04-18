# visited = True 재귀 visited=False를 해주는 것은 완전탐색과 같은 조합 및 순열 문제에서 썼던듯하다.
import sys
input=sys.stdin.readline
sys.setrecursionlimit(10**6)

N=int(input())
picture=[list(input().rstrip()) for _ in range(N)]

visit=[[0]*N for _ in range(N)]
dx=[1,-1,0,0]
dy=[0,0,1,-1]

def check_range(x,y):
	if 0<=x<N and 0<=y<N:
		return True
	return False

def dfs(x,y,color):
	if picture[x][y] == 'G':
		picture[x][y]='R'
	visit[x][y]=1
	for i in range(4):
		nx=x+dx[i]
		ny=y+dy[i]
		if check_range(nx, ny) and not visit[nx][ny] and color == picture[nx][ny]:
			visit[nx][ny]=1
			dfs(nx,ny,color)
cnt=0
for i in range(N):
	for j in range(N):
		if not visit[i][j]:
			cnt+=1
			dfs(i,j,picture[i][j])
print(cnt,end=" ")

visit=[[0]*N for _ in range(N)]
cnt=0
for i in range(N):
	for j in range(N):
		if not visit[i][j]:
			cnt+=1
			dfs(i,j,picture[i][j])
print(cnt)
