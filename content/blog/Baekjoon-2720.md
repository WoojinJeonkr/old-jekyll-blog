---
external: false
title: "Baekjoon 2720"
date: 2023-02-04
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2720){:target="_blank"}

## 02. Solution

```Python
for _ in range(int(input())):
    c = int(input())
    d = [25, 10, 5, 1]
    lst = []
    for n in d:
        lst.append(c // n)
        c = c % n
    print(*lst)
```