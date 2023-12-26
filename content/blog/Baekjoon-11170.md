---
external: false
title: "Baekjoon 11170"
date: 2023-03-28
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11170){:target="_blank"}

## 02. Solution

```Python
for _ in range(int(input())):
    ans = 0
    n, m = input().split()
    for i in range(int(n), int(m)+1):
        ans += str(i).count('0')
    print(ans)
```
