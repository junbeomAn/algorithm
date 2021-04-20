import sys
from collections import deque
input=sys.stdin.readline

f,s,g,u,d=map(int, input().split())

q=deque([])
visit=[0]*(f+1)

if s==g:
	print(0)
elif u==0 and s<g:
	print("use the stairs")
elif d==0 and s>g:
	print("use the stairs")
else:
	gap=g-s
	if gap>0:
		upcnt=gap//u
		s+=upcnt*u
		q.append((s,upcnt))
	else:
		gap*=-1
		dwncnt=gap//d
		s-=dwncnt*d
		q.append((s,dwncnt))
	while q:
		n,cnt=q.popleft()
		visit[n]=1
		if n==g:
			print(cnt)
			break

		if n+u<=f and visit[n+u]==0:
			q.append((n+u,cnt+1))
			visit[n+u]=1
		if n-d>0 and visit[n-d]==0:
			q.append((n-d,cnt+1))
			visit[n-d]=1

	if visit[g]==0:
		print("use the stairs")
