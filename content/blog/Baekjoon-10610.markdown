---
external: false
title: "Baekjoon 10610"
date: 2022-12-17
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10610){:target="_blank"}

## 02. Solution

```Python
N = list(input())
N.sort(reverse=True)
sum = 0
for i in N:
    sum += int(i)
if sum % 3 != 0 or "0" not in N:
    print(-1)
else:
    print(''.join(N))
```
