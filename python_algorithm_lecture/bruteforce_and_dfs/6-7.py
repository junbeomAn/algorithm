import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

n=int(input())
coin=list(map(int, input().split()))
m=int(input())


def dfs(acc,cnt):
	global minCount
	if acc==m:
		minCount=min(cnt,minCount)
		return

	for i in coin:
		if acc + i <= m:
			dfs(acc+i,cnt+1)
if __name__=="__main__":
	minCount=float("inf")
	dfs(0,0)
	print(minCount)
