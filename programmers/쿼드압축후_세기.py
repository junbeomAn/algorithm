zero=0
one=0
def solution(arr):
    h=len(arr)

    def recursion(r, c, s):
        global zero
        global one

        acc=0
        for i in range(r, r+s):
            for j in range(c, c+s):
                acc+=arr[i][j]

        if acc==s*s or acc==0:
            if acc>0:
                one+=1
            else:
                zero+=1
        else:
            recursion(r, c, s//2)
            recursion(r+s//2, c, s//2)
            recursion(r, c+s//2, s//2)
            recursion(r+s//2, c+s//2, s//2)
    recursion(0, 0, h)
    return [zero, one]
