import sys
input = sys.stdin.readline

n=int(input())
nums=list(map(int, input().split()))

res=[-1] * n
s=[]
for i in range(n):
	while len(s)!=0 and nums[s[-1]] < nums[i]:
		res[s[-1]] = nums[i]
		s.pop()

	s.append(i)

print(*res)


