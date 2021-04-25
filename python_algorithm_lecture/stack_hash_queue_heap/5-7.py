import sys
sys.stdin=open("input.txt","rt")

mand=input()
N=int(input())
lst=list(input() for _ in range(N))

for idx, custom in enumerate(lst):
	i=j=0
	while j<len(mand) and i<len(custom):
		if mand[j] == custom[i]:
			j+=1
		i+=1
	if j<len(mand):
		print("#"+str(idx+1)+" NO")
	else:
		print("#"+str(idx+1)+" YES")
