---
external: false
title: "Baekjoon 2857"
date: 2023-03-18
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2857)

## 02. Solution

```Python
lst = [] 
for i in range(1, 6): 
    w = input() 
    if "FBI" in w: 
        lst.append(i) 
if lst: 
    print(*lst) 
else: 
    print("HE GOT AWAY!")
```
