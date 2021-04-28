import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

n,k=map(int,input().split())
nums=list(map(int, input().split()))
m=int(input())

def dfs(x,acc):
	global cnt
	if x==n:
		if len(acc)==k and sum(acc)%m==0:
			cnt+=1
	else:
		dfs(x+1,acc+[nums[x]])
		dfs(x+1,acc)

if __name__=="__main__":
	cnt=0
	dfs(0,[])
	print(cnt)

