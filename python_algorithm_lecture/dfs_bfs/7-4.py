import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")


def dfs(L, acc):
	global cnt

	if acc>t:
		return
	if L==k:
		if acc==t:
			cnt+=1
	else:
		for i in range(n[L]+1):
			dfs(L+1,acc+p[L]*i)

if __name__=="__main__":
	t=int(input())
	k=int(input())
	p=list()
	n=list()
	cnt=0

	for i in range(k):
		a,b=map(int,input().split())
		p.append(a)
		n.append(b)

	dfs(0,0)
	print(cnt)
