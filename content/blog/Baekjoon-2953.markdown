---
external: false
title: "Baekjoon 2953"
date: 2022-12-31
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2953){:target="_blank"}

## 02. Solution

```Python
for i in range(5):
    if i == 0: 
        score = {i+1 : sum(map(int, input().split()))}
    else:
        score.update({i+1 : sum(map(int, input().split()))})
print(max(score, key=score.get), score[max(score, key=score.get)])
```
