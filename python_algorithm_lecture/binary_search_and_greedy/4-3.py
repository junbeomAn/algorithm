import sys
sys.stdin=open("input.txt", "rt")
n, m = map(int, input().split())
runtime = list(map(int, input().split()))


def getCd(x):
	cnt = 1
	acc = 0
	for i in runtime:
		if acc + i > x:
			acc = i
			cnt += 1
		else:
			acc += i
	return cnt

left = 1
right = sum(runtime)
maxValue = max(runtime)
res = 0

while left <= right:
	mid = (left + right) // 2

	if mid >= maxValue and getCd(mid) <= m :
		res = mid
		right = mid - 1
	else:
		left = mid + 1
print(res)
