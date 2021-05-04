from collections import defaultdict
def num_frequency(a):
    cnt=defaultdict(int)

    for num in a:
        cnt[num]=cnt[num]+1
    res=[(key, cnt[key]) for key in cnt]
    res.sort(key=lambda x:(-x[1]))
    return res

def solution(a):
    answer=0
    targets=num_frequency(a)
    for target, _ in targets:
        l=len(a)
        i=0
        temp=0
        while i<l:
            num=a[i]
            if num==target and i<l-1 and num!=a[i+1]:
                temp+=2
                i+=1
            if num!=target and i<l-1 and target==a[i+1]:
                temp+=2
                i+=1
            i+=1
        if answer<temp:
            answer=temp
        else:
            break
    return answer
