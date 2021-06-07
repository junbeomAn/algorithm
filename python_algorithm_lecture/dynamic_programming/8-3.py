import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

def dfs(x):
	if dp[x]>0:
		return dp[x]
	if x==1 or x==2:
		return x
	else:
		dp[x]=dfs(x-1)+dfs(x-2)
		return dp[x]

n=int(input())
dp=[0]*(n+1)
dfs(n)
print(dp[n])
