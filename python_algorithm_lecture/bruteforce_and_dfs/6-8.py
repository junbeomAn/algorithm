import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

n,m=map(int, input().split())

def dfs(x):
	global cnt
	if x==m:
		for i in range(m):
			print(res[i], end=" ")
		print()
		cnt+=1
	else:
		for i in range(1, n+1):
			if check[i]==0:
				check[i]=1
				res[x]=i
				dfs(x+1)
				check[i]=0

if __name__=="__main__":
	res=[0]*m
	check=[0]*(n+1)
	cnt=0
	dfs(0)
	print(cnt)
