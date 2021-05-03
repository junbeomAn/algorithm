import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

def dfs(L,acc):
	global cnt
	if L>n:
		return
	if L==n:
		print(acc)
		cnt+=1
	else:
		if s[L]=='0':
			return
		nc=int(s[L:L+1])+64
		if nc<=90:
			dfs(L+1,acc+chr(nc))
		nc=int(s[L:L+2])+64
		if nc<=90:
			dfs(L+2,acc+chr(nc))

if __name__=="__main__":
	s=input()
	cnt=0
	n=len(s)
	dfs(0,"")
	print(cnt)
