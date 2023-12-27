---
external: false
title: "Baekjoon 7785"
date: 2023-04-05
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/7785)

## 02. Solution

```Python
n = int(input())
s = dict()
for i in range(n):
    a, b = map(str, input().split())
    if b == "enter":
        s[a] = 1
    else:
        del s[a]
s = sorted(s.keys(), reverse=True)
for k in s:
    print(k)
```
