---
external: false
title: "Baekjoon 14487"
date: 2023-06-04
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/14487){:target="_blank"}

### 02. Solution

#### 01. Python (memory: 36352KB, time: 56ms)

```Python
n = int(input())
town = list(map(int, input().split()))
print(sum(town) - max(town))
```
