---
title: Weather Observation Station 19
author: "Woojin JEON"
categories: SQL
tags: [SQL]
---

### 01. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/weather-observation-station-19/problem?isFullScreen=true&h_r=next-challenge&h_v=zen){:target="_blank" rel="noopener noreferrer"}

### 02. 정답 코드 (MySQL)

```sql
SELECT ROUND(SQRT(POW(MIN(LAT_N) - MAX(LAT_N), 2) + POW(MIN(LONG_W) - MAX(LONG_W), 2)), 4)
AS Euclidean_Distance
FROM station;
```
