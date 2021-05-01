import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

# def dfs(s,acc):
# 	global res
# 	if s>n:
# 		return
# 	else:
# 		for i in range(s,n):
# 			t,p=reserve[i]
# 			if i+t<=n and acc+p>res:
# 				res=acc+p
# 			dfs(i+t,acc+p)
def dfs(s,acc):
	global res
	if s==n:
		if acc>res:
			res=acc
	else:
		t,p=reserve[s]
		if s+t<=n:
			dfs(s+t,acc+p)
		dfs(s+1,acc)
if __name__=="__main__":
	res=0
	n=int(input())
	reserve=[list(map(int,input().split())) for _ in range(n)]
	dfs(0,0)
	print(res)
