import sys
sys.stdin=open("input.txt","rt")
expression=input()
priority={"(": 1, '+': 2, "-":2, "*": 3, "/": 3}
answer=""
stack=[]

for c in expression:
	if c == "(":
		stack.append(c)
	elif c.isnumeric():
		answer+=c
	elif c == ")":
		while stack:
			top=stack.pop()
			if top == "(":
				break
			answer+=top
	else:
		while stack and priority[stack[-1]] >= priority[c]:
			answer+=stack.pop()
		stack.append(c)

while stack:
	answer+=stack.pop()
print(answer)


