---
external: false
title: "Baekjoon 9550"
date: 2023-02-18
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/9550){:target="_blank"}

## 02. Solution

```Python
T = int(input())
for case in range(T):
    N, K = map(int, input().split(' '))
    candies = list(map(int, input().split(' ')))
    kid = 0
    for candy in candies:
        kid += candy // K
    print(kid)
```
