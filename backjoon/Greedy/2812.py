n, k = map(int, input().split())
num = input()
tmp = k
s = []
for i in num:
	while s	and s[-1] < i and k > 0:
		s.pop()
		k -= 1
	s.append(i)

while k > 0:
	s.pop()
	k -= 1

print(''.join(s[:n-tmp]))
