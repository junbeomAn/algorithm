import sys
sys.stdin=open("input.txt", "rt")

alnum = input()
n = len(alnum)
acc = 0

for x in alnum:
	if x.isdecimal():
		acc = acc * 10 + int(x)
print(acc)
cnt = 0
for i in range(1, acc + 1):
	if acc % i == 0:
		cnt+=1
print(cnt)

