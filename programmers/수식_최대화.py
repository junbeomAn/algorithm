from itertools import permutations

def solution(expression):
    answer=float("-inf")
    #부호 리스트와 숫자 리스트로 나눔.
    # expression을 순회할 때 숫자가 아닌거 나오면 부호리스트에 넣기, 숫자는 문자열로 쌓다가 부호보이거나 문자열 끝이면 숫자리스트에 넣기
    # 위 순회하면서 부호 몇개인지 확인. 순열 만들기
    # 각 순열 우선순위에 따라서 계산적용. 이중 반복문 필요. 내부 반복문 끝날때마다 절댓값 갱신.
    acc=''
    op_lst=[]
    num_lst=[]
    op_cnt=set()
    for c in expression:
        if c.isalnum():
            acc+=c
        else:
            op_lst.append(c)
            op_cnt.add(c)
            num_lst.append(int(acc))
            acc=''

    num_lst.append(int(acc))

    for priority in list(permutations(op_cnt)):
        temp_num_lst=num_lst[0:]
        temp_op_lst=op_lst[0:]
        for target in list(priority):
            new_op=[]
            new_num=[]
            for i, op in enumerate(temp_op_lst):
                if op==target:
                    next_num=0
                    if target=="+":
                        next_num=temp_num_lst[i]+temp_num_lst[i+1]
                    elif target=="-":
                        next_num=temp_num_lst[i]-temp_num_lst[i+1]
                    else:
                        next_num=temp_num_lst[i]*temp_num_lst[i+1]
                    temp_num_lst[i+1]=next_num
                else:
                    new_op.append(op)
                    new_num.append(temp_num_lst[i])
            new_num.append(temp_num_lst[-1])
            temp_op_lst=new_op
            temp_num_lst=new_num
        answer=max(answer, abs((temp_num_lst)[0]))
    return answer
