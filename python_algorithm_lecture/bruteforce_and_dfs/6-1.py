import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

# ans=""
def recursion(x):
	# global ans
	if x==0:
		return
	# ans = str(x%2) + ans
	recursion(x//2)
	print(x%2, end="")

if __name__=="__main__":
	recursion(int(input()))
	# print(ans)
