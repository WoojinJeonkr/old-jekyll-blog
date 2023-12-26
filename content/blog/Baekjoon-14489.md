---
external: false
title: "Baekjoon 14489"
date: 2023-03-31
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/14489){:target="_blank"}

## 02. Solution

```Python
A, B = map(int, input().split())
C = int(input())
print(A + B - 2*C if A + B >= 2*C else A + B)
```
