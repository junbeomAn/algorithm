import sys
sys.stdin=open("input.txt","rt")
str1=dict()
s1=input()
s2=input()

for s in s1:
	str1[s]=str1.get(s,0)+1

for s in s2:
	str1[s]=str1.get(s,0)-1

for x in s1:
	if str1.get(x) > 0:
		print("NO")
		break
else:
	print("YES")

# collections의 Counter를 이용해서 풀어도 되고, 딕셔너리를 == 으로 직접 비교하는 것도 가능하다.
