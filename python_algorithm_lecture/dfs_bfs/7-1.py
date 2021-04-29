import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

def dfs(s,time,score):
	global res
	if time<=m:
		if res<score:
			res=score
	if s==n:
		return
	else:
		for i in range(s,n):
			x,y=q[i]
			dfs(i+1,time+y,score+x)
if __name__=="__main__":
	n,m=map(int,input().split())
	q=[list(map(int,input().split())) for _ in range(n)]
	res=float("-inf")
	dfs(0,0,0)
	print(res)
