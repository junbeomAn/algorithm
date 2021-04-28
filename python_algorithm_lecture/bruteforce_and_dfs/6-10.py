import os
import sys

p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")
n,m=map(int,input().split())


def combi(x,acc):
	global cnt
	if x==n+1:
		if len(acc)==m:
			cnt+=1
			print(*acc)
		return
	else:
		combi(x+1,acc+[x])
		combi(x+1,acc)

if __name__=="__main__":
	cnt=0
	combi(1,[])
	print(cnt)
