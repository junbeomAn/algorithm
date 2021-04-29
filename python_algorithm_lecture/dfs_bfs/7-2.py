import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

def dfs(s,acc):
	global res
	if acc>res:
		res=acc
	if s>=n:
		return
	else:
		for i in range(s,n):
			t,p=reserve[i]
			dfs(i+t,acc+p)

if __name__=="__main__":
	res=0
	n=int(input())
	reserve=[list(map(int,input().split())) for _ in range(n)]
	dfs(0,0)
	print(res)
