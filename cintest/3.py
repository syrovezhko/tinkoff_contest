from math import inf
 
n = int(input())
s = input()
ans = inf
for i in range(n - 1):
    for j in range(i + 1, n):
        if len(set(s[i:j + 1])) == 4:
            ans = min(ans, j - i + 1)
if ans is inf:
    print(-1)
else:
    print(ans)