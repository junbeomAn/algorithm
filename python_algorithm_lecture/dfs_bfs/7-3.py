import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

# 조합

def dfs(L,acc):
	if L==k:
		if 0<acc<=S:
			p.add(acc)
	else:
		dfs(L+1,acc+w[L])
		dfs(L+1,acc-w[L])
		dfs(L+1,acc)

if __name__=="__main__":
	k=int(input())
	w=list(map(int,input().split()))
	S=sum(w)
	p=set()
	dfs(0,0)
	print(S-len(p))
