---
external: false
title: "Baekjoon 15969"
date: 2023-04-03
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/15969){:target="_blank"}

## 02. Solution

```Python
N = input()
lst = list(map(int,input().split()))
print(max(lst)-min(lst))
```
