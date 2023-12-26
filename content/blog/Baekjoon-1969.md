---
external: false
title: "Baekjoon 1969"
date: 2023-05-23
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1969){:target="_blank"}

### 02. Solution

#### 01. Python (memory: 31256KB, time: 84ms)

```Python
n, m = map(int, input().split())
arr = [list(input()) for _ in range(n)]
result = ''
hap = 0

for i in range(m):
    a = c = g = t = 0

    for j in range(n):
        nuc = arr[j][i]
        
        if nuc == 'T': t += 1
        elif nuc == 'A': a += 1
        elif nuc == 'G': g += 1
        elif nuc == 'C': c += 1
    
    max_count = max(a, c, g, t)
    
    if max_count == a:
        result += 'A'
        hap += c + g + t
    elif max_count == c:
        result += 'C'
        hap += a + g + t
    elif max_count == g:
        result += 'G'
        hap += a + c + t
    else:
        result += 'T'
        hap += c + g + a

print(result)
print(hap)
```
