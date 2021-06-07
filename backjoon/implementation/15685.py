
dx=[0,-1,0,1]
dy=[1,0,-1,0]
#x,y 반대

x,y,d,g=map(int,input().split())

path=[d]
for i in range(g+1):
	add=[]
	for j in range(len(path)-1, -1, -1):
		el=path[j]
		add.append((el+1)%4)
	path+=add
print(path)
