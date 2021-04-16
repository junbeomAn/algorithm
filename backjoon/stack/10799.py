sticks=input()

stack=[]

cnt=0
for i, p in enumerate(sticks):
	if p=='(':
		stack.append(p)
	else:
		stack.pop()
		if sticks[i-1]=='(':
			cnt+=len(stack)
		else:
			cnt+=1
print(cnt)
