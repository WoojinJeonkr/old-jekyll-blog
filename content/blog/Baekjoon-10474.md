---
external: false
title: "Baekjoon 10474"
date: 2023-05-24
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10474){:target="_blank"}

### 02. Solution

#### 01. Python (memory: 31256KB, time: 128ms)

```Python
while True:
    a, b = map(int, input().split())
    if not(a|b): break
    print(f"{a//b} {a%b} / {b}")
```
