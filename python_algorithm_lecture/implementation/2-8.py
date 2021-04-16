import math
import sys

sys.stdin=open("input.txt", "rt")
n = int(input())
nums = list(input().split())

def isPrime(x):
	if x==1:
		return False
	n = int(math.sqrt(x) + 1)
	for i in range(2, n + 1):
		if x != i and x % i == 0:
			return False
	return True

def reverse(x):
	x = x[::-1]
	return int(x)

for x in nums:
	r = reverse(x)
	if isPrime(r) == True:
		print(r, end=" ")
