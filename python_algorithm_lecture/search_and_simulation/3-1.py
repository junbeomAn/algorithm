
import sys
sys.stdin=open("input.txt", "rt")

n = int(input())

# def palindrome(s):
# 	size = len(s)
# 	for i in range(size // 2):
# 		if s[i]!= s[size - 1 - i]:
# 			return "NO"
# 	return "YES"

def palindrome(s):
	if s == s[::-1]:
		return "YES"
	return "NO"

for i in range(n):
	x = input()
	print("#%d" %(i + 1), palindrome(x.lower()))
