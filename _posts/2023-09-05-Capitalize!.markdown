---
title: Capitalize!
author: "Woojin JEON"
categories: Algorithm
tags: [Algorithm]
---

### 01. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/capitalize/problem?isFullScreen=true){:target="_blank" rel="noopener noreferrer"}

### 02. 정답 코드 (Python)

```Python
#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the solve function below.
def solve(s):
    return ' '.join(map(str.capitalize, s.split(' ')))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    s = input()
    result = solve(s)
    fptr.write(result + '\n')
    fptr.close()
```
