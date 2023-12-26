---
external: false
title: "Baekjoon 9094"
date: 2023-06-30
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/9094){:target="_blank" rel="noopener noreferrer"}

### 02. Solution (Python, memory: 31256KB, time: 4376ms)

```python
for _ in range(int(input())):
    n, m = map(int, input().split())
    print(sum((a ** 2 + b ** 2 + m) % (a * b) == 0 for a in range(1, n) for b in range(a + 1, n)))
```
