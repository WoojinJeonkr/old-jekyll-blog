---
title: Top Earners
author: "Woojin JEON"
categories: SQL
tags: [SQL]
---

### 01. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/earnings-of-employees/problem?isFullScreen=true&h_r=next-challenge&h_v=zen){:target="_blank" rel="noopener noreferrer"}

### 02. 정답 코드 (MySQL)

```sql
SELECT (MONTHS*SALARY) AS EARN, COUNT(*)
FROM EMPLOYEE
GROUP BY EARN
ORDER BY EARN DESC LIMIT 1;
```
