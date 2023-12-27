---
external: false
title: "Baekjoon 11656"
date: 2022-12-28
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11656)

## 02. Solution

```Python
s = input()
answer = []

for i in range(len(s)):
    answer.append(s[i:])

answer.sort()

for i in answer:
    print(i)
```
