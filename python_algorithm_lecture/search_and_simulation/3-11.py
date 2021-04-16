import sys
sys.stdin=open("input.txt", "rt")

n = 7
a = [list(map(int, input().split())) for _ in range(n)]

def palindrome(s):
	size = len(s)
	for i in range(size // 2):
		if s[i]!= s[size - 1 - i]:
			return False
	return True

cnt = 0

for i in range(n):
	h = []
	v = []
	for j in range(n):
		h.append(a[i][j])
		v.append(a[j][i])
	for k in range(3):
		if palindrome(h[k:k+5]):
			cnt += 1
		if palindrome(v[k:k+5]):
			cnt += 1

print(cnt)
