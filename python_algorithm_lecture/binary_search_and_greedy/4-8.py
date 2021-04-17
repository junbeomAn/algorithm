import sys
from collections import deque
sys.stdin=open("input.txt", "rt")

n, m = map(int, input().split())
w = list(map(int, input().split()))

w.sort()
w = deque(w)

left = 0
right = n - 1

cnt = 0

while w:
	if len(w) == 1:
		cnt += 1
		break

	if w[0] + w[-1] > m:
		w.pop()
		cnt += 1
	else:
		w.popleft()
		w.pop()
		cnt += 1

# while left <= right:
# 	sum = w[right]
# 	if sum + w[left] <= m:
# 		sum += w[left]
# 		left += 1
# 	print(sum)
# 	right -= 1
# 	cnt += 1

print(cnt)
