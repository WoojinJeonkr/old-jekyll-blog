---
external: false
title: "Baekjoon 2605"
date: 2022-12-21
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2605){:target="_blank"}

## 02. Solution

```Python
N = int(input())
arr = list(map(int, input().split()))
lst = []

for i in range(N):
    if i == 0:
        lst.insert(0, i+1)
    else:
        lst.insert(arr[i], i+1)

for i in reversed(lst):
    print(i, end=" ")
```
