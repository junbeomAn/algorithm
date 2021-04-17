import sys
sys.stdin=open("input.txt", "rt")

n = int(input())
timetable = [list(map(int, input().split())) for _ in range(n)]

timetable.sort(key = lambda x: (x[1], x[0]))

end = 0
cnt = 0
for s, e in timetable:
	if s >= end:
		cnt += 1
		end = e

print(cnt)
