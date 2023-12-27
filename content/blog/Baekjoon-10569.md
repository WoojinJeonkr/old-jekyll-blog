---
external: false
title: "Baekjoon 10569"
date: 2023-05-27
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10569)

### 02. Solution

#### 01. Python (memory: 31256KB, time: 40ms)

```Python
for _ in range(int(input())): vertices, edges = map(int, input().split()); print(edges-vertices+2)
```
