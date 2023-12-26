---
external: false
title: "Baekjoon 21867"
date: 2023-05-16
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/21867){:target="_blank"}

### 02. Solution

#### 01. Python (memory: 33036KB, time: 52ms)

```Python
N, S = int(input()), input()
result = ''.join(c for c in S if c not in "JAVA")
print(result if result else "nojava")
```
