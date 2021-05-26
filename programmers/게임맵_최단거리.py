from collections import deque

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    check = [[0] * m for _ in range(n)]
    q = deque()
    q.append((0, 0, 1))
    check[0][0] = 1

    while q:
        cx, cy, dist = q.popleft()

        if cx == n-1 and cy == m-1:
            return dist
        for i in range(4):
            nx = dx[i] + cx
            ny = dy[i] + cy
            if not (0<=nx<n and 0<=ny<m):
                continue
            if check[nx][ny] == 0 and maps[nx][ny] == 1:
                check[nx][ny] = 1
                q.append((nx, ny, dist + 1))

    return -1
