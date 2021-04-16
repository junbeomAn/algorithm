import sys
sys.stdin=open("input.txt", "rt")
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
m = int(input())


for i in range(m):
	lnum, dir, dist = map(int, input().split())
	line = a[lnum - 1]
	dist = dist % n
	for j in range(dist):
		if dir == 0:
			line.append(line.pop(0))
		else:
			line.insert(0, line.pop())

s = 0
e = n-1
res = 0
for i in range(n):
	for j in range(s, e + 1):
		res += a[i][j]
	if i < n//2:
		s += 1
		e -= 1
	else:
		s -= 1
		e += 1
print(res)
