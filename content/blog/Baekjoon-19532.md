---
external: false
title: "Baekjoon 19532"
date: 2023-05-18
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/19532)

### 02. Solution

#### 01. Python (memory: 31256KB, time: 40ms)

```Python
a, b, c, d, e, f = map(int, input().split())
x = (c*e - b*f) // (a*e - b*d)
y = (c*d - a*f) // (b*d - a*e)
print(x, y)
```
