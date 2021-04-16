import sys
sys.stdin=open("input.txt", "rt")
n = int(input())
lst = list(map(int, input().split()))

tot = 0
prev = 0

for x in lst:
	if x == 1:
		prev += 1
		tot += prev
	else:
		prev = 0
print(tot)
