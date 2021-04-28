import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")
cnt=0

n,m=map(int, input().split())

def dfs(acc):
	global cnt
	if len(acc) == m:
		print(*acc)
		cnt+=1
		return

	for i in range(1, n+1):
		acc.append(str(i))
		dfs(acc)
		acc.pop()

if __name__=="__main__":
	dfs([])
	print(cnt)

