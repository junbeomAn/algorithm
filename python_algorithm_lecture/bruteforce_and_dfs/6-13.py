import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

def dfs(x):
	global cnt
	if x==n:
		cnt+=1
	else:
		for i in adjs[x]:
			if check[i]==0:
				check[i]=1
				dfs(i)
				check[i]=0

if __name__=="__main__":
	n,m=map(int,input().split())
	adjs=[[] for _ in range(n+1)]
	cnt=0
	check=[0]*(n+1)
	for i in range(m):
		s,e=map(int,input().split())
		adjs[s].append(e)
	check[1]=1
	dfs(1)
	print(cnt)
