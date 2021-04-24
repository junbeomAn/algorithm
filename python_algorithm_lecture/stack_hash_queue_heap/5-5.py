from collections import deque
import sys
sys.stdin=open("input.txt", "rt")


N,K = map(int, input().split())
q=[i for i in range(1, N+1)]
q=deque(q)
last=0
for _ in range(N-1):
	cnt=0
	while cnt <  K:
		q.append(q.popleft())
		cnt+=1
	q.pop()

print(q[0])
