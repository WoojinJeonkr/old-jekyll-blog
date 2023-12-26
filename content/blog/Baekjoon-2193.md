---
external: false
title: "Baekjoon 2193"
date: 2022-12-11
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2193){:target="_blank"}

## 02. Solution

```Python
number = [0, 1, 1]
for i in range(3, 91):
    number.append(number[i - 2] + number[i - 1])
n = int(input())
print(number[n])
```