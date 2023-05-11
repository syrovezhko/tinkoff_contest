input()
bals = list(map(int, input().split()))
n = len(bals)
rngs = set()
for start in range(n - 1):
    for end in range(start + 2, n + 1):
        if sum(bals[start:end]) == 0:
            rngs |= { (i, j) for i in range(start + 1) for j in range(end - 1, n) }
            break
print(len(rngs))