from collections import defaultdict
def solution(gems):
    answer = []
    left=right=0
    gem_pocket=set()
    gem_cnt=defaultdict(int)
    min_len=float("inf")

    for gem in gems:
        gem_pocket.add(gem)

    total_gem=len(gem_pocket)
    gem_pocket.clear()

    while left<len(gems):
        if len(gem_pocket)==total_gem:
            if min_len>right-left:
                min_len=right-left
                answer=[left+1, right]
            gem=gems[left]
            if gem_cnt[gem]==1:
                gem_pocket.remove(gem)
            gem_cnt[gem]-=1
            left+=1
        if right<len(gems) and len(gem_pocket)<total_gem:
            gem=gems[right]
            gem_pocket.add(gem)
            gem_cnt[gem]+=1
            right+=1
        if right==len(gems) and len(gem_pocket)<total_gem:
            break
    return answer
