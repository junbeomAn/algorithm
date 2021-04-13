import heapq
import sys
input = sys.stdin.readline

N = int(input())
cards = [int(input()) for _ in range(N)]

heapq.heapify(cards)
cnt = 0
while len(cards) > 1:
	n1 = heapq.heappop(cards)
	n2 = heapq.heappop(cards)
	heapq.heappush(cards, n1 + n2)
	cnt += (n1 + n2)

print(cnt)

