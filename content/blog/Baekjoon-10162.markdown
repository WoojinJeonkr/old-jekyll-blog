---
external: false
title: Baekjoon 10162
date: 2022-12-27
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10162){:target="_blank"}

## 02. Solution

```Python
T = int(input())

if T % 10 != 0:
    print(-1)
else:
    A = B = C = 0
    A = T // 300
    B = (T % 300) // 60
    C = (T % 300) % 60 // 10
    print(A, B, C)
```
