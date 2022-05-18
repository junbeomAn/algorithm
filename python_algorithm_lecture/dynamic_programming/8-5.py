# import os
# import sys
# p=os.path.dirname(os.path.realpath(__file__))
# sys.stdin=open(p+"/input.txt","rt")

def maxSubsequence(n, lst):
  lst = list(map(int, lst.split()))
  length = len(lst)
  dp = [1] * (n+1)
  res = -2147480000

  for i in range(1, length):
    curr = lst[i]
    for j in range(i - 1, -1, -1):
      if curr > lst[j]:
        dp[i] = max(dp[i], dp[j] + 1)
        res = max(res, dp[i])

  print(res)
  print(dp)

maxSubsequence(100, '72 47 40 83 45 33 8 17 60 74 38 88 80 66 41 91 67 59 44 3 30 20 16 54 14 10 81 9 65 63 90 25 11 99 69 79 86 89 94 34 24 62 78 2 1 27 95 50 56 55 22 23 76 75 29 26 97 68 58 48 46 73 82 35 96 37 51 15 61 4 84 5 71 98 18 92 64 32 52 70 53 12 93 28 19 7 13 31 21 49 39 43 42 85 77 87 100 6 36 57')
