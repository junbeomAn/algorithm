def solution(lottos, win_nums):
	answer = []
	zeroCnt=0
	low=0
	res=[6,6,5,4,3,2,1]
	for i in range(6):
		if lottos[i] in win_nums:
			low+=1
		if lottos[i]==0:
			zeroCnt+=1
	answer.append(res[low+zeroCnt])
	answer.append(res[low])
	return answer
