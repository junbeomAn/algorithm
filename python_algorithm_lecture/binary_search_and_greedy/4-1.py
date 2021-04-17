import sys
sys.stdin=open("input.txt", "rt")

n, m = map(int, input().split())
nums = list(map(int, input().split()))

nums.sort()

def bsearch(x):
	left = 0
	right = n - 1
	while left <= right:
		mid = (left + right) // 2
		if nums[mid] < x:
			left = mid + 1
		elif nums[mid] == x:
			return mid + 1
		else:
			right = mid - 1
	return -1

res = bsearch(m)
print(res)
