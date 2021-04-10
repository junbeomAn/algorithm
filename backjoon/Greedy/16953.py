# import sys
# from collections import deque

# A, B = map(int, sys.stdin.readline().split())

# visited = set()
# q = []
# res = -1
# q = deque(q)
# q.append((A, 0))
# visited.add(A)

# while q:
# 	node, cnt = q.popleft()
# 	if node > B:
# 		continue

# 	if node == B:
# 		res = cnt + 1
# 		break

# 	x = node * 2
# 	if x not in visited:
# 		q.append((x, cnt + 1))
# 		visited.add(x)

# 	y = int(str(node) + "1")
# 	if y not in visited:
# 		q.append((y, cnt + 1))
# 		visited.add(y)

# print(res)

import sys

a, b = map(int, sys.stdin.readline().split())
cnt = 0
while True:
	if a == b:
		cnt += 1
		break
	if a > b:
		cnt = -1
		break

	if b % 10 == 1:
		b = b // 10
	elif b % 2 == 0:
		b /= 2
	else:
		cnt = -1
		break
	cnt += 1

print(cnt)
