---
external: false
title: "Baekjoon 11944"
date: 2023-06-03
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11944)

### 02. Solution

#### 01. Python (memory: 31256KB, time: 40ms)

```Python
N, M = map(int, input().split())
res = str(N)*N
print(res if len(res) <= M else res[:M])
```
