---
external: false
title: "Baekjoon 1145"
date: 2023-03-20
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1145){:target="_blank"}

## 02. Solution

```Python
lst = list(map(int, input().split()))

n = min(lst)
while 1:
    count = 0
    for i in lst:
        if n % i == 0:
            count += 1
    if count > 2:
        break
    n += 1
print(n)
```