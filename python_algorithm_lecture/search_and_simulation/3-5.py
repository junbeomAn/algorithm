import sys
sys.stdin=open("input.txt", "rt")
n, m = map(int, input().split())

a = list(map(int, input().split()))

l = 0
r = 1
tot = a[l]
cnt = 0
while True:
	if tot < m:
		if r < n:
			tot += a[r]
			r += 1
		else:
			break
	elif tot == m:
		cnt += 1
		tot -= a[l]
		l += 1
	else:
		tot -= a[l]
		l += 1

print(cnt)
