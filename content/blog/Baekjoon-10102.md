---
external: false
title: "Baekjoon 10102"
date: 2023-05-26
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10102){:target="_blank"}

### 02. Solution

#### 01. Python (memory: 31256KB, time: 40ms)

```Python
v = int(input())
vote = list(str(input()))

count_A = vote.count('A')
count_B = len(vote) - count_A

if count_A > count_B:
    print('A')
elif count_A == count_B:
    print('Tie')
else:
    print('B')
```