import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)

    while scoville:
        value1 = heapq.heappop(scoville)
        if value1 >= K:
            break
        value2 = heapq.heappop(scoville)
        heapq.heappush(scoville, value1 + value2 * 2)
        if len(scoville) == 1 and scoville[0] < K:
            return -1
        answer += 1
    return answer
