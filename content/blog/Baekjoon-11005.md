---
external: false
title: "Baekjoon 11005"
date: 2023-03-02
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11005){:target="_blank"}

## 02. Solution

```Python
nums = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
n, b = map(int,input().split())
ans = ''

while n:
    ans = nums[n % b] + ans
    n //= b

print(ans)
```
