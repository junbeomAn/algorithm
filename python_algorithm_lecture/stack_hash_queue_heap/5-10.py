import sys
import heapq

sys.stdin=open("/Users/junbeoman/projects/algorithm/python_algorithm_lecture/stack_hash_queue_heap/input.txt","rt")
q=[]
while True:
	v=int(input())
	if v == -1:
		break
	if v == 0:
		if len(q)>0:
			print(heapq.heappop(q))
		else:
			print(-1)
	else:
		heapq.heappush(q, v)

