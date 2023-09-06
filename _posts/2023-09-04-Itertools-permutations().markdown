---
title: itertools permutations()
author: "Woojin JEON"
categories: Algorithm
tags: [Algorithm]
---

### 01. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/itertools-permutations/problem?isFullScreen=true&h_r=next-challenge&h_v=zen){:target="_blank" rel="noopener noreferrer"}

### 02. 정답 코드 (Python)

```Python
from itertools import permutations

S, K = input().split()

# 순열을 구한 뒤 결과인 튜플 안 두 요소를 기준으로 알파벳 순으로 정렬 후 리스트로 묶는다.
permutation_list = sorted(list(permutations(S, int(K))), key=lambda x : (x[0], x[1]))

# 리스트 안 튜플의 요소를 서로 붙여 하나씩 출력한다.
for i in permutation_list:
    print(''.join(i))
```
