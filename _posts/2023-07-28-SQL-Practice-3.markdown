---
title: SQL Practice 3
author: "Woojin JEON"
categories: Engineer Information Processing
tags: [Engineer Information Processing]
---

### 01. 문제 [[SQL Practice (Difficult: Easy) 4번](https://www.sql-practice.com/)]

다음 환자 테이블에서 first_name이 'C'로 시작하는 환자의 first_name을 표시하시오.

| patient_id | first_name | last_name  | gender | birth_date | city     | province_id | allergies  | height | weight |
|------------|------------|------------|--------|------------|----------|-------------|------------|--------|--------|
| 1          | Donald     | Waterfield | M      | 1963-02-12 | Barrie   | ON          | NULL       | 156    | 65     |
| 2          | Mickey     | Baasha     | M      | 1981-05-28 | Dundas   | ON          | Sulfa      | 185    | 76     |
| 3          | Jiji       | Sharma     | M      | 1957-09-05 | Hamilton | ON          | Penicillin | 194    | 106    |
| 4          | Blair      | Diaz       | M      | 1967-01-07 | Hamilton | ON          | NULL       | 191    | 104    |
| 5          | Charles    | Wolfe      | M      | 2017-11-19 | Orillia  | ON          | Penicillin | 47     | 10     |
| 6          | Sue        | Falcon     | F      | 2017-09-30 | Ajax     | ON          | Penicillin | 43     | 5      |

### 02. 정답

```sql
SELECT
  first_name,
  last_name
FROM patients
WHERE weight BETWEEN 100 AND 120;
```

### 03. 다른 정답

```sql
SELECT
  first_name,
  last_name
FROM patients
WHERE weight >= 100 AND weight <= 120;
```

### 03. 결과

| first_name | last_name |
|------------|-----------|
| Jiji       | Sharma    |
| Blair      | Diaz      |
