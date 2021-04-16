import sys
sys.stdin=open("input.txt","rt")

N, M = map(int, input().split())
a=[0 for _ in range(N + M + 1)]
maxNum = 0

for i in range(1, N + 1):
	for j in range(1, M + 1):
		a[i + j] += 1
		maxNum = max(a[i + j], maxNum)

for idx, x in enumerate(a):
	if idx > 0 and x == maxNum:
		print(idx, end=" ")
