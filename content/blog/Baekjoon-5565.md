---
external: false
title: "Baekjoon 5565"
date: 2023-04-12
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/5565){:target="_blank"}

## 02. Solution

```Python
total_price = int(input())
for _ in range(9): total_price -= int(input())
print(total_price)
```