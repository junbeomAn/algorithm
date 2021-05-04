from collections import deque

def solution(numbers, hand):
    answer = ''
    adjs=[[8,10,11], [2,4], [1,3,5], [2,6], [1,5,7], [2,4,6,8], [3,5,9], [4,8,10], [0,5,7,9], [6,8,11], [0,7], [0,9]]
    c_left=10
    c_right=11

    def bfs(s, t):
        q=deque([])
        check=[0]*12
        q.append((s, 0))
        check[s]=1

        while q:
            node, cnt=q.popleft()
            if node==t:
                return cnt
            for n in adjs[node]:
                if check[n]==0:
                    q.append((n, cnt+1))
                    check[n]=1
    for num in numbers:
        if num in [1,4,7]:
            answer+="L"
            c_left=num
        elif num in [3,6,9]:
            answer+="R"
            c_right=num
        else:
            l_dist=bfs(c_left, num)
            r_dist=bfs(c_right, num)
            if l_dist<r_dist:
                answer+="L"
                c_left=num
            elif l_dist>r_dist:
                answer+="R"
                c_right=num
            else:
                if hand=="left":
                    answer+="L"
                    c_left=num
                else:
                    answer+="R"
                    c_right=num
    return answer
