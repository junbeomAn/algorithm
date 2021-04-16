import sys
sys.stdin=open("input.txt", "rt")
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
m = 0

for i in range(n):
	s1 = 0
	s2 = 0
	for j in range(n):
		s1 += a[i][j]
		s2 += a[j][i]
	m = max(m, s1, s2)

s3 = s4 = 0
for i in range(n):
	s3 += a[i][i]
	s4 += a[i][n - 1 - i]

m = max(s3, s4, m)

print(m)
