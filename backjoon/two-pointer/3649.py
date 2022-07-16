import sys
input = sys.stdin.readline

while True:
  try:
    nanoMeterUnit = 10000000
    target = int(input()) * nanoMeterUnit
    n = int(input())
    nums =[int(input()) for _ in range(n)]
    nums.sort()

    left = 0
    right = len(nums) - 1
    while left < right:
      if nums[left] + nums[right] == target:
        print('yes %d %d' %(nums[left], nums[right]))
        break
      elif nums[left] + nums[right] < target:
        left = left + 1
      else:
        right = right - 1

    if left >= right:
      print('danger')

  except:
    break
