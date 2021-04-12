N = int(input())
strlist = [input() for _ in range(N)]

res = 0
numCount = {}
curr = 9

for s in strlist:
	for i, c in enumerate(s):
		if c in numCount:
			numCount[c] += pow(10, len(s) - i - 1)
		else:
			numCount[c] = pow(10, len(s) - i - 1)

countList = list(numCount.items())
countList.sort(key= lambda x: -x[1])

for _, n in countList:
	res += (curr * n)
	curr -= 1
print(res)

