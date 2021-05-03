def solution(enroll, referral, seller, amount):

	length=len(enroll)+1
	answer = [[] for _ in range(length)]
	e_num=[i for i in range(length)]
	check=[0 for _ in range(length)]

	r_num=[]
	e_dict={v: i+1 for i, v in enumerate(enroll)}
	adjs=[[] for _ in range(length)]
	s_dict={}

	r_num.append(0)
	for r in referral:
		if r=="-":
			r_num.append(0)
		else:
			r_num.append(e_dict[r])
	for i in range(1, len(r_num)):
		v=r_num[i]
		adjs[v].append(i)

	for i, name in enumerate(seller):
		num=e_dict[name]
		s_dict[num]=s_dict.get(num, list())
		s_dict[num].append(amount[i]*100)

	def dfs(s,prev):

		for n in adjs[s]:
			if check[n]==0:
				check[n]=1
				dfs(n,s)
				check[n]=0

		if s in s_dict:
			for profit in s_dict[s]:
				answer[s].append(profit)
		new_answer=[]
		for v in answer[s]:
			tmp=v//10
			if tmp>0:
				new_answer.append(v-tmp)
				answer[prev].append(tmp)
			else:
				new_answer.append(v)
		answer[s]=new_answer

	dfs(0,0)
	return list(map(sum,answer))[1:]
