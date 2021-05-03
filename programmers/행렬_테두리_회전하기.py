def solution(rows, columns, queries):
	answer = []
	board=[list(range(i*columns+1, i*columns+1+columns)) for i in range(0, rows)]

	def rotate(x1,y1,x2,y2):
		lst=[]
		temp=board[x1][y1]
		lst.append(temp)
		for i in range(x1+1, x2+1):
			board[i-1][y1]=board[i][y1]
			lst.append(board[i][y1])
		for i in range(y1+1, y2+1):
			board[x2][i-1]=board[x2][i]
			lst.append(board[x2][i])
		for i in range(x2-1, x1-1, -1):
			board[i+1][y2]=board[i][y2]
			lst.append(board[i][y2])
		for i in range(y2-1, y1, -1):
			board[x1][i+1]=board[x1][i]
			lst.append(board[x1][i])
		board[x1][y1+1]=temp
		answer.append(min(lst))

	for a,b,c,d in queries:
		rotate(a-1, b-1, c-1, d-1)
	return answer
