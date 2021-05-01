import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

def dfs(L):
	global ans
	if L==n:
		a,b=max(res),min(res)
		if a>b and res[0]!=res[1] and res[1]!=res[2] and res[0]!=res[2]:
			if a-b<ans:
				ans=a-b
	else:
		for i in range(3):
			res[i]+=coin[L]
			dfs(L+1)
			res[i]-=coin[L]

if __name__=="__main__":

	n=int(input())
	coin=[int(input()) for _ in range(n)]
	res=[0]*3
	ans=float("inf")
	dfs(0)
	print(ans)
