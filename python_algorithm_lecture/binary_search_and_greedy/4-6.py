import sys
sys.stdin=open("input.txt", "rt")
n = int(input())

lst = []
for i in range(n):
	h, w = map(int, input().split())
	lst.append((h, w))

lst.sort(key = lambda x: (-x[0], -x[1]))

maxWeight = 0
cnt = 0
for h, w in lst:
	if maxWeight < w:
		maxWeight = w
		cnt += 1
print(cnt)
