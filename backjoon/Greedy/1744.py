
import sys
import heapq
input = sys.stdin.readline
# readline 은 rstrip을 따로 하진 않지만, int와 같은 함수로 파싱을 할 경우 알아서 개행문자가 사라진다.
minheap = []
maxheap = []
N = int(input())

for _ in range(N):
	n = int(input())
	if n > 0:
		heapq.heappush(maxheap, (-n, n))
	else:
		heapq.heappush(minheap, n)
result = 0
def maxsum(pq):
	res = 0
	while len(pq) > 1:
		n1, n2 = heapq.heappop(pq), heapq.heappop(pq)
		if type(n1) is tuple:
			n1 = n1[1]
			n2 = n2[1]
		if n1 * n2 > n1 + n2:
			res += (n1 * n2)
		else:
			res += n1 + n2
	if pq:
		if type(pq[0]) is tuple:
			res += pq[0][1]
		else:
			res += pq[0]
	return res

result += maxsum(maxheap)
result += maxsum(minheap)

print(result)


