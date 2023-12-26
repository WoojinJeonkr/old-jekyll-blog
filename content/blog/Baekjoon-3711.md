---
external: false
title: "Baekjoon 3711"
date: 2023-02-01
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/3711){:target="_blank"}

## 02. Solution

```Python
for _ in range(int(input())):
    n = int(input())
    number_list = [int(input()) for i in range(n)]
    result = 0
    while True:
        result += 1
        if len({i % result for i in number_list}) == n:
            print(result)
            break
```
