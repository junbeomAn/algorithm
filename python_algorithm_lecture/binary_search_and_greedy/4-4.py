import sys
sys.stdin=open("input.txt", "rt")
n, c = map(int, input().split())

nums = [int(input()) for _ in range(n)]

nums.sort()

def setHorse(dist):
	cnt = 1
	prev = nums[0]
	for i in range(1, n):
		if nums[i] - prev >= dist:
			cnt += 1
			prev = nums[i]
	return cnt

left = 1
right = nums[n - 1]
res = 0

while left <= right:
	mid = (left + right) // 2
	horse = setHorse(mid)

	if horse < c:
		right = mid - 1
	elif horse >= c:
		left = mid + 1
		res = mid
print(res)
