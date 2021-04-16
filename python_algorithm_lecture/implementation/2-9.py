import sys
sys.stdin=open("input.txt", "rt")
n = int(input())

def yieldScore(lst):
	cnt = [0] * 6
	ret = 0

	for i in lst:
		cnt[i-1] += 1
	c = max(cnt)

	idx = len(cnt) - cnt[::-1].index(c) - 1

	if c == 3:
		ret = 10000 + (idx + 1) * 1000
		return ret
	elif c == 2:
		ret = 1000 + (idx + 1) * 100
		return ret
	elif c == 1:
		ret = (idx+1) * 100
		return ret
m = 0

for i in range(n):
	param = list(map(int, input().split()))
	m = max(yieldScore(param), m)

print(m)
