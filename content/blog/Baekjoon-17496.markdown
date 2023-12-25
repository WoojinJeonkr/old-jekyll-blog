---
external: false
title: "Baekjoon 17496"
date: 2023-01-06
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/17496){:target="_blank"}

## 02. Solution

```Python
N, C, T, P = map(int, input().split())
print((N-1)//C * T * P)
```
