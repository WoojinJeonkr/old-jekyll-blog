---
external: false
title: "Baekjoon 2693"
date: 2023-01-12
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2693)

## 02. Solution

```Python
n = int(input())
for i in range(n):
    number = list(map(int, input().split()))
    number.sort()
    print(number[-3])
```
