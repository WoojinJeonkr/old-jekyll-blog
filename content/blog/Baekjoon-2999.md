---
external: false
title: "Baekjoon 2999"
date: 2023-06-10
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2999){:target="_blank"}

### 02. Solution

#### 01. Python (memory: 31256KB, time: 44ms)

```Python
input_str = input()
length = len(input_str)

x, y = 0, 0

for i in range(1, int(length / 2) + 1):
  for j in range(i, length + 1):
    if i * j == length:
      x, y = i, j

for i in range(x):
  for j in range(y):
    print(input_str[i + j * x], end='')
```
