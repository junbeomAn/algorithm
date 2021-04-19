import sys
sys.stdin=open("input.txt", "rt")
N,m=input().split()
m=k=int(m)

stack = []
for n in N:
	while stack and stack[-1] < n and m > 0:
		stack.pop()
		m-=1
	stack.append(n)

if m!=0:
	stack=stack[:-m]
print("".join(stack))
