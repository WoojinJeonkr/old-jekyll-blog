---
title: Weather Observation Station 13
author: "Woojin JEON"
categories: SQL
tags: [SQL]
---

### 01. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/weather-observation-station-13/problem?isFullScreen=true&h_r=next-challenge&h_v=zen){:target="_blank" rel="noopener noreferrer"}

### 02. 정답 코드 (MySQL)

```sql
SELECT TRUNCATE(SUM(LAT_N), 4) FROM STATION
WHERE LAT_N > 38.7880 AND LAT_N < 137.2345;
```
