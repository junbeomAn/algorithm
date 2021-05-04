import sys
sys.setrecursionlimit(300000)

answer=0
def solution(a, edges):
    length=len(a)
    adjs=[[] for _ in range(length)]
    ch=[0]*length

    if sum(a)!=0:
        return -1
    if not any(a):
        return 0

    for j in range(len(edges)):
        s,e=edges[j]
        adjs[s].append(e)
        adjs[e].append(s)

    def dfs(n, last):
        global answer
        for node in adjs[n]:
            if ch[node]==0:
                ch[node]=1
                dfs(node, n)
                ch[node]=0
        answer+=abs(a[n])
        a[last]+=a[n]
        # a[n]=0
    ch[0]=1
    dfs(0,0)
    return answer
