from collections import deque
M=2147483647
answer=M
def solution(board):

    def bfs(x, y, start):
        global answer
        q=deque([])
        n=len(board)
        dx=[1,0,-1,0]
        dy=[0,1,0,-1]
        res=[[M]*n for _ in range(n)]

        q.append((x, y, start, 0)) # x, y, prev_dir, cost

        while q:
            cx, cy, prev_dir, cost=q.popleft()
            if cx==n-1 and cy==n-1:
                answer=min(answer, cost)

            for i in range(4):
                nx=cx+dx[i]
                ny=cy+dy[i]

                if 0<=nx<n and 0<=ny<n and board[nx][ny]==0:
                    if abs(prev_dir-i) == 2:
                        continue
                    step=100
                    if prev_dir!=i:
                        step=600
                    if cost+step<=res[nx][ny]:
                        res[nx][ny]=cost+step
                        q.append((nx, ny, i, cost+step))
    bfs(0, 0, 0)
    bfs(0, 0, 1)
    return answer
