---
external: false
title: "Baekjoon 10093"
date: 2023-05-19
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10093)

### 02. Solution

#### 01. Python (memory: 36676KB, time: 88ms)

```Python
A, B = sorted(map(int, input().split()))
n = max(0, B - A - 1)
print(n)
if n > 0: print(*range(A + 1, B), end=' ')
```

#### 02. Python (memory: 35892KB, time: 88ms)

```Python
A, B = sorted(map(int, input().split()))
n = max(0, B - A - 1)
print(n, *(range(A + 1, B)) if n else [])
```

#### 03. Python (memory: 35892KB, time: 84ms)

```Python
A, B = sorted(map(int, input().split()))
n = max(0, B - A - 1)
print(n, *range(A + 1, B)) if n > 0 else print(n)
```
