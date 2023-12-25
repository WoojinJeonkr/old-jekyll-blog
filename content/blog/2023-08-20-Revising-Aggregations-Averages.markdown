---
title: Revising Aggregations Averages
author: "Woojin JEON"
categories: SQL
tags: [SQL]
---

### 01. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/revising-aggregations-the-average-function/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen){:target="_blank" rel="noopener noreferrer"}

### 02. 정답 코드 (MySQL)

```sql
SELECT SUM(POPULATION)/COUNT(NAME) FROM CITY
WHERE DISTRICT = 'California';
```

#### 03. 다른 정답 코드 (MySQL)

```sql
SELECT AVG(POPULATION) FROM CITY
WHERE DISTRICT = 'California';
```
