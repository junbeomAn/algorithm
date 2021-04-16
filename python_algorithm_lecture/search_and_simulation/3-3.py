import sys
sys.stdin=open("input.txt", "rt")

a = list(range(21))

def sortByRange(lst, s, e):
	for i in range(0, ((e - s) // 2)):
		lst[s + i], lst[e - i] = lst[e - i], lst[s + i]

for _ in range(10):
	s, e = map(int, input().split())
	sortByRange(a, s, e)

for idx, n in enumerate(a):
	if idx > 0:
		print(n, end=" ")
