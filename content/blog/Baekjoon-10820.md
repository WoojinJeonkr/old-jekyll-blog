---
external: false
title: "Baekjoon 10820"
date: 2023-02-22
---

## 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10820)

## 02. Solution

```Python
import sys

while True:
    line = sys.stdin.readline().rstrip('\n')
    alphabet, lowercase, uppercase, number = 0, 0, 0, 0
    
    if not line:
        break
    for s in line:
        if s.isupper():
            uppercase += 1
        elif s.islower():
            lowercase += 1
        elif s.isdigit():
            number += 1
        elif s.isspace():
            alphabet += 1
    
    sys.stdout.write("{} {} {} {}\n".format(lowercase, uppercase, number, alphabet))
```
