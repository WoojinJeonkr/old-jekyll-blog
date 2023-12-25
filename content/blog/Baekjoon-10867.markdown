---
external: false
title: "Baekjoon 10867"
date: 2022-12-24
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10867){:target="_blank"}

## 02. Solution

```Python
N = int(input())
lst = map(int, input().split())
print(*sorted(list(set(lst))))
```
