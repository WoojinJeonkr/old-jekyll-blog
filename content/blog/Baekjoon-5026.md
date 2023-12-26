---
external: false
title: "Baekjoon 5026"
date: 2023-06-25
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/5026){:target="_blank" rel="noopener noreferrer"}

### 02. Solution (Python, memory: 31256KB, time: 128ms)

```python
for _ in range(int(input())):
    prob = input()
    if prob != 'P=NP':
        a, b = map(int, prob.split('+'))
        print(a + b)
    else:
        print('skipped')
```