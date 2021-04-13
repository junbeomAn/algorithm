import sys
input = sys.stdin.readline

days_in_month = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
N = int(input())

days = [0, 0]
s = 0
def date_to_day(month, day):
	return days[month] + day

for x, v in days_in_month.items():
	s+=v
	days.append(s)

bloom_period = []
for i in range(N):
	s_month, s_day, e_month, e_day=map(int, input().split())
	bloom_period.append((date_to_day(s_month, s_day), date_to_day(e_month, e_day)))

bloom_period.sort(key=lambda x: (x[0], x[1]))

e_date = date_to_day(12, 1)
i = -1
curr_end=60
cnt = 0

while curr_end < e_date:
	i+=1
	temp = curr_end
	for j in range(i, N):
		new_start, new_end=bloom_period[j]
		if curr_end >= new_start:
			if temp < new_end:
				temp=new_end
				i = j
		else:
			break

	if temp > curr_end:
		curr_end = temp
		cnt += 1
	else:
		cnt = 0
		break
print(cnt)
