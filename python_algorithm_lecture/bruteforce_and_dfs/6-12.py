import os
import sys
p=os.path.dirname(os.path.realpath(__file__))
sys.stdin=open(p+"/input.txt","rt")

n,m=map(int,input().split())
graph=[list(map(int, input().split())) for _ in range(m)]
adjs=[[0]*n for _ in range(n)]

for s,e,w in graph:
	adjs[s-1][e-1]=w

for i in range(n):
	print(*adjs[i])
