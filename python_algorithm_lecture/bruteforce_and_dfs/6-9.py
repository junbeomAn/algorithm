import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

def getPascalSummit(lev,lst):
	for i in range(lev-1):
		a=[]
		for j in range(lev-1-i):
			a.append(lst[j]+lst[j+1])
		lst=a[0:]
	return lst[0]

def dfs(x,acc):
	global res
	if res:
		return
	if x==n:
		if getPascalSummit(x,acc)==m:
			res=acc[0:]
			return
	else:
		for i in range(1,n+1):
			if check[i]==0:
				check[i]=1
				acc.append(i)
				dfs(x+1,acc)
				check[i]=0
				acc.pop()
if __name__=="__main__":
	n,m=map(int,input().split())
	check=[0]*(n+1)
	res=[]
	dfs(0,[])
	print(*res)
