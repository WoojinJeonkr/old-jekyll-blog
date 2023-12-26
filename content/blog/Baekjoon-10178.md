---
external: false
title: "Baekjoon 10178"
date: 2023-05-29
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10178){:target="_blank"}

### 02. Solution

#### 01. Python (memory: 31256KB, time: 48ms)

```Python
for _ in range(int(input())):
    c, v = map(int, input().split())
    print(f"You get {c//v} piece(s) and your dad gets {c%v} piece(s).")
```