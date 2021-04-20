import sys
sys.stdin=open("input.txt", "rt")

expression=input()
stack=[]
for c in expression:
	if c.isnumeric():
		stack.append(int(c))
	else:
		b,a=stack.pop(),stack.pop()
		res=0
		if c=="+":
			res=(a+b)
		elif c=="-":
			res=(a-b)
		elif c=="*":
			res=(a*b)
		else:
			res=(int(a/b))
		stack.append(res)

print(stack[0])
