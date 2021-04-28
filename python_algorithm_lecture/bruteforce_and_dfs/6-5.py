import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

c,n=map(int, input().split())
w=[int(input()) for _ in range(n)]
res=0

def dfs(x,acc):
	global res
	if acc > c:
		return
	res=max(res,acc)
	if x == n:
		return
	else:
		dfs(x+1,acc)
		dfs(x+1,acc+w[x])

if __name__=="__main__":
	dfs(0,0)
	print(res)
