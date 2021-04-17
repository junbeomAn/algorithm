import sys
sys.stdin=open("input.txt", "rt")
k, n = map(int, input().split())

nums = [int(input()) for _ in range(k)]

def cut(length):
	cnt = 0
	for x in nums:
		cnt += (x // length)
	return cnt

nums.sort()

res = 0
left = 1
right = nums[k - 1]

while left <= right:
	mid = (left + right) // 2
	if n > cut(mid):
		right = mid - 1
	elif n <= cut(mid):
		left = mid + 1
		res = mid

print(res)
