import sys
sys.stdin=open("input.txt", "rt")

n, k = map(int, input().split())
nums = list(map(int, input().split()))
res = set()
for i in range(n):
	for j in range(i + 1, n):
		for x in range(j + 1, n):
			res.add(nums[i] + nums[j] + nums[x])

res = list(res)
res.sort(reverse=True)
print(res[k-1])
