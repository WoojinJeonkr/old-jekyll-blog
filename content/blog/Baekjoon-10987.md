---
external: false
title: "Baekjoon 10987"
date: 2023-01-19
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10987){:target="_blank"}

## 02. Solution

```Python
cnt = 0
for i in input():
    if i in ['a', 'e', 'i', 'o', 'u']:
        cnt += 1
print(cnt)
```