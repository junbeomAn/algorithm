N,S = map(int, input().split())
nums = list(map(int, input().split()))

s = 0
e = 0
acc = 0
res = 1000000

while True:
	if acc >= S:
		if res > e - s:
			res = e - s
		acc -= nums[s]
		s += 1
	else:
		if e == N:
			break
		acc += nums[e]
		e += 1

if res == 1000000:
	print(0)
else:
	print(res)


