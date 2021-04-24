import sys
from collections import deque
sys.stdin=open("input.txt", "rt")
N,M=map(int, input().split())
patients=list(map(int, input().split()))

patients=deque(patients)
cnt=0

while True:
	first=patients.popleft()
	if any(first < x for x in patients):
		patients.append(first)
	else:
		cnt+=1
		if M==0:
			print(cnt)
			break
	M-=1
	if M<0:
		M=len(patients)-1
