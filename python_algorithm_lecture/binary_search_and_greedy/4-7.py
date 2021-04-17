import sys
sys.stdin=open("input.txt", "rt")

L = int(input())
box = list(map(int, input().split()))
m = int(input())

maxH = float("-inf")
minH = float("inf")
cnt = [0] * 101

for x in box:
	cnt[x] += 1
	if maxH < x:
		maxH = x
	if minH > x:
		minH = x

for _ in range(m):
	if cnt[maxH] == 1:
		cnt[maxH] -= 1
		maxH -= 1
		cnt[maxH] += 1
	else:
		cnt[maxH] -= 1
		cnt[maxH - 1] += 1

	if cnt[minH] == 1:
		cnt[minH] -= 1
		minH += 1
		cnt[minH] += 1
	else:
		cnt[minH] -= 1
		cnt[minH + 1] += 1

print(maxH - minH)

# box.sort()
# max = L - 1
# min = 0

# for _ in range(m):
# 	if min < L and box[min] > box[min + 1]:
# 		box.sort()
# 		min = 0
# 	if max >= 0 and box[max] < box[max - 1]:
# 		box.sort()
# 		max = L - 1
# 	box[max] -= 1
# 	box[min] += 1
# box.sort()
# print(box[L-1] - box[0])
