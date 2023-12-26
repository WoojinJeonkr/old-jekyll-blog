---
external: false
title: "Baekjoon 11024"
date: 2023-02-07
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11024){:target="_blank"}

## 02. Solution

```Python
T = int(input())
for _ in range(T):
    lst = list(map(int, input().split()))
    print(sum(lst))
```
