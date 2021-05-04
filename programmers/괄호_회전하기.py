from collections import deque
def is_valid(q):
    i=0
    stack=[]
    while i<len(q):
        if q[i]=="]":
            if not stack or stack[-1]!="[":
                return False
            stack.pop()
        elif q[i]==")":
            if not stack or stack[-1]!="(":
                return False
            stack.pop()
        elif q[i]=="}":
            if not stack or stack[-1]!="{":
                return False
            stack.pop()
        else:
            stack.append(q[i])
        i+=1
    if not stack:
        return True
    else:
        return False

def solution(s):
    answer=0
    q=deque(list(s))
    i=0
    while i==0 or "".join(q)!=s:
        if is_valid(q):
            answer+=1
        q.append(q.popleft())
        i+=1
    return answer
