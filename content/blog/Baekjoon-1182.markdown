---
external: false
title: "Baekjoon 1182"
date: 2022-12-07
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1182){:target="_blank"}

## 02. Solution

```Python
def cal_number(index, sum):
    global count
    if index >= n:
        return
    sum += ls[index]
    if sum == s:
        count += 1
    cal_number(index + 1, sum - ls[index])
    cal_number(index + 1, sum)
n, s = map(int, input().split())
ls = list(map(int, input().split()))
count = 0
cal_number(0, 0)
print(count)
```
