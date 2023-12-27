---
external: false
title: "Baekjoon 2161"
date: 2023-02-16
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2161)

## 02. Solution

```Python
n = int(input())
card = [i for i in range(1, n + 1)]
res = []

while True:
    res.append(card.pop(0))
    if not card:
        break
    card.append(card.pop(0))

print(*res)
```
