---
external: false
title: "Baekjoon 1822"
date: 2023-02-17
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1822){:target="_blank"}

## 02. Solution

```Python
N = map(int, input().split())

A = set(map(int, input().split()))
B = set(map(int, input().split()))

ans = []
for n in A:
    if n not in B:
        ans.append(n)

ans.sort()
print(len(ans))

if len(ans) != 0:
    print(*ans)
```