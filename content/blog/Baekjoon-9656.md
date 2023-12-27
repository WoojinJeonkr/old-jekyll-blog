---
external: false
title: "Baekjoon 9656"
date: 2023-05-01
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/9656)

## 02. Solution

### 01. Python (memory: 31388KB, time: 40ms)

```Python
import sys
input = sys.stdin.readline
N = int(input())
print('CY' if N%2 else 'SK')
```
