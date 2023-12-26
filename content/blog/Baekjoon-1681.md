---
external: false
title: "Baekjoon 1681"
date: 2023-02-20
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1681){:target="_blank"}

## 02. Solution

```Python
N, l = list(map(int,input().split(' ')))

num = 1
cnt = 0
while True:
    if str(l) not in str(num):
        cnt+=1
        if cnt == N:
            print(num)
            break
        num+=1

    else:
        num+=1
```
