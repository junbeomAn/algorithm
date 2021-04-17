import sys
sys.stdin=open("input.txt", 'rt')

n = int(input())
nums= list(map(int, input().split()))

left = 0
right = n - 1
last = 0
res = ''

while left <= right:
	if nums[left] > last and nums[right] > last:
		if nums[left] < nums[right]:
			res += "L"
			last = nums[left]
			left += 1
		else:
			res += "R"
			last = nums[right]
			right -= 1
	elif nums[left] > last:
		res += "L"
		last = nums[left]
		left += 1
	elif nums[right] > last:
		res += "R"
		last = nums[right]
		right -= 1
	else:
		break

print(len(res))
print(res)
