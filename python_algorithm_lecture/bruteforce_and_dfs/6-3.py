import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

n=int(input())
# res=[]
# def dfs(start):
# 	if start>n:
# 		print(*res)
# 		return
# 	for i in range(start,n+1):
# 		res.append(i)
# 		dfs(i+1)
# 		res.pop()

# 	print(*res)
# if __name__ == "__main__":
# 	dfs(1)

# 상태 트리 활용법. 1 사용 or 1 사용 x -> 2 사용 or 2 사용 x ....

def dfs(v):
	if v==n+1:
		for i in range(1, n+1):
			if check[i] == 1:
				print(i, end=" ")
		print()
	else:
		check[v]=1
		dfs(v+1)
		check[v]=0
		dfs(v+1)
if __name__=="__main__":
	check=[0]*(n+1)
	dfs(1)
