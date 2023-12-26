---
external: false
title: "Baekjoon 2948"
date: 2023-01-25
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2948){:target="_blank"}

## 02. Solution

```Python
months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
days = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"]
D, M = map(int, input().split())
print(days[(sum(months[:M-1]) + D) % 7])
```