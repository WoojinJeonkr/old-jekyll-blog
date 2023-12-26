---
external: false
title: "Baekjoon 25628"
date: 2023-04-26
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/25628){:target="_blank"}

## 02. Solution

### 01. Python (memory: 31388KB, time: 44ms)

```Python
A, B = map(int, input().split())
print(min(A//2, B))
```
