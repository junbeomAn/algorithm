'''
1. 선생님 T 학생 S, X(장애물 놓을 수 있는 곳) 각각의 좌표를 센다.
2. X에 대하여 3개의 조합을 구하는 dfs 수행. 수행 중에 선생의 위치로부터 직선위치 탐색 수행.
3. 학생 s를 만나는일 없이 탐색을 모두 수행하면 YES 아니면 NO.
'''
n = int(input())
board=[list(input().split()) for _ in range(n)]

student=[]
teacher=[]
available=[]

for i in range(n):
	for j in range(n):
		v = board[i][j]
		if v == "S":
			student.append((i, j))
		elif v == "T":
			teacher.append((i, j))
		elif v == "X":
			available.append((i, j))

def dfs(L, s):
	res=""
	if L==3:
		cnt=len(student)
		for t in teacher:
			tx, ty = t
			for i in range(tx-1, -1, -1):
				if board[i][ty] == "O":
					break
				elif board[i][ty] == "S":
					return "NO"
			for i in range(tx+1, n):
				if board[i][ty] == "O":
					break
				elif board[i][ty] == "S":
					return "NO"
			for i in range(ty-1, -1, -1):
				if board[tx][i] == "O":
					break
				elif board[tx][i] == "S":
					return "NO"
			for i in range(ty+1, n):
				if board[tx][i] == "O":
					break
				elif board[tx][i] == "S":
					return "NO"
		return "YES"
	else:
		for i in range(s, len(available)):
			x, y=available[i]
			board[x][y]="O"
			res = dfs(L+1, i+1)
			if res == "YES":
				return "YES"
			board[x][y]="X"
	return "NO"
print(dfs(0, 0))
