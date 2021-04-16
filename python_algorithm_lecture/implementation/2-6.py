import sys
sys.stdin=open("input.txt", "rt")

N = int(input())
nums = list(input().split())

def digit_sum(x):
	s = 0
	for n in x:
		s += int(n)
	return s

max = 0
res = 0
dsum = 0
for x in nums:
	dsum = digit_sum(x)
	if max < dsum:
		max = dsum
		res = x

print(res)
