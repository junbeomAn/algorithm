import os
import sys
from collections import deque
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

# def dfs(h, cnt):
# 	global res
# 	if cnt>res:
# 		return
# 	if h==e:
# 		if res>cnt:
# 			res=cnt
# 	else:
# 		if h<e:
# 			dfs(h+5, cnt+1)
# 			dfs(h+1, cnt+1)
# 		else:
# 			dfs(h-1, cnt+1)

def bfs(s):
	global res
	q.append((s,0))
	ch[s]=1
	while q:
		h,c=q.popleft()
		if h==e:
			res=min(res,c)

		for d in dx:
			if 1<=h+d<=10000 and ch[h+d]==0:
				ch[h+d]=1
				q.append((h+d,c+1))

if __name__=="__main__":
	s,e=map(int, input().split())
	res=2147000000
	dx=[5,1,-1]
	q=deque([])
	ch=[0]*10001

	bfs(s)
	print(res)
