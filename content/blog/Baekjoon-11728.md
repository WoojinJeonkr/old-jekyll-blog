---
external: false
title: "Baekjoon 11728"
date: 2023-01-20
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11728){:target="_blank"}

## 02. Solution

```Python
n, m = map(int, input().split())
a = list(map(int,input().split()))
b = list(map(int,input().split()))
answer = []
a_start, b_start = 0, 0
while a_start < n or b_start<m:
    if b_start >= m or (a_start < n and a[a_start] <= b[b_start]):
        answer.append(a[a_start])
        a_start += 1
    else:
        answer.append(b[b_start])
        b_start += 1
print(' '.join(list(map(str,answer))))
```