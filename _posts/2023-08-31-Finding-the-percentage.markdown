---
title: Finding the percentage
author: "Woojin JEON"
categories: Algorithm
tags: [Algorithm]
---

### 01. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/finding-the-percentage/problem?isFullScreen=true){:target="_blank" rel="noopener noreferrer"}

### 02. 정답 코드 (Python)

```sql
if __name__ == '__main__':
  n = int(input())
  student_marks = []
  for _ in range(n):
    name, *line = input().split()
    scores = list(map(float, line))
    student_marks.append({name : sum(scores)/len(scores)})
  query_name = input()
  for student in student_marks:
    for key, value in student.items():
      if key == query_name:
        print("{:.2f}".format(value))
```
