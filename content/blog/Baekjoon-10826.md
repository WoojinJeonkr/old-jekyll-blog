---
external: false
title: "Baekjoon 10826"
date: 2023-02-26
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10826)

## 02. Solution

```Python
n = int(input())
x, y = 0, 1
for i in range(n):
    x, y = y, x+y
print(x)
```
