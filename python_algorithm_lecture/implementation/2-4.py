import sys

sys.stdin=open("input.txt","rt")
n = int(input())
std = list(map(int, input().split()))

s = sum(std)
avg = (s / n)
avg += 0.5
avg = int(avg)

m = float("inf")
snum = 0
for i in range(10):
	if m >= abs(avg-std[i]) and std[snum] < std[i]:
		snum = i
		m = abs(avg-std[i])

print(avg, snum + 1)
