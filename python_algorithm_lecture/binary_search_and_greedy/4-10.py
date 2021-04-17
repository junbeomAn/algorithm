import sys
sys.stdin=open("input.txt", "rt")

n = int(input())
nums = list(map(int, input().split()))
res = [0] * n

for idx, bigCount in enumerate(nums):
	for i, num in enumerate(res):
		if bigCount == 0 and num == 0:
			res[i] = idx + 1
			break
		elif num == 0:
			bigCount -= 1

print(*res)
