---
external: false
title: "Baekjoon 16673"
date: 2023-05-28
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/16673)

### 02. Solution

#### 01. Python (memory: 31256KB, time: 40ms)

```Python
c, k, p = map(int, input().split())
print(sum((k * i) + (p * i ** 2) for i in range(1, c + 1)))
```
