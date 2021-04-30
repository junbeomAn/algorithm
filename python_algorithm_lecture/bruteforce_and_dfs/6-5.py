import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

c,n=map(int, input().split())
w=[int(input()) for _ in range(n)]
res=0

def dfs(x,acc,tsum):
	global res
	if acc+(total-tsum)<res:
		return
	if acc > c:
		return
	if x == n:
		res=max(res,acc)
		return
	else:
		dfs(x+1,acc,tsum+w[x])
		dfs(x+1,acc+w[x],tsum+w[x])

if __name__=="__main__":
	total=sum(w)
	dfs(0,0,0)
	print(res)
