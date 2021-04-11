N = int(input())
K = int(input())
sensors = list(map(int, input().split()))

diffs = []

sensors.sort()

for i in range(1, N):
	diffs.append(sensors[i] - sensors[i - 1])

diffs.sort()
sum = 0
for j in range(N - K):
	sum += diffs[j]
print(sum)
