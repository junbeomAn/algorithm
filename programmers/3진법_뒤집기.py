def solution(n):
    answer=0
    tmp=""
    while n>0:
        tmp+=str(n%3)
        n//=3
    tmp=int(tmp)
    cnt=0

    while tmp>0:
        answer+=pow(3,cnt)*(tmp%10)
        tmp//=10
        cnt+=1

    return answer
