---
external: false
title: "Baekjoon 2921"
date: 2023-03-07
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2921)

## 02. Solution

```Python
N = int(input())
ans = 1 * (N + 2)

for i in range(2, N+1):
    ans += i * (N + 2)
print(ans)
```
