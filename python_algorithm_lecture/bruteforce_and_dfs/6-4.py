import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

n=int(input())
nums=list(map(int, input().split()))

# def dfs(x):
# 	global res
# 	if x==n:
# 		return
# 	s1=s2=0
# 	for i in nums:
# 		if check[i]==0:
# 			s1+=i
# 		else:
# 			s2+=i

# 	if s1==s2:
# 		res="YES"
# 		return
# 	else:
# 		check[nums[x]]=1
# 		dfs(x+1)
# 		check[nums[x]]=0
# 		dfs(x+1)

# if __name__=="__main__":
# 	check={num:0 for num in nums}
# 	res="NO"
# 	dfs(0)

# 	print(res)

def dfs(x,acc):
	global total
	global res
	if acc>total//2:
		return
	if x==n:
		if acc==total-acc:
			res="YES"
			return
	else:
		dfs(x+1,acc+nums[x])
		dfs(x+1,acc)

if __name__=="__main__":
	total=sum(nums)
	res="NO"
	dfs(0,0)
	print(res)
