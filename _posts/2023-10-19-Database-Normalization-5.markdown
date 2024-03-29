---
title: Database Normalization 5
author: "Woojin JEON"
categories: Database
tags: [Database]
---

### 01. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/database-normalization-5/problem?isFullScreen=true){:target="_blank" rel="noopener noreferrer"}

### 02. 정답

3

### 03. 풀이

주어진 관계 R(a,b,c,d)에 대한 함수적 종속성은 다음과 같다.  

1. a, c → b, d
2. a, d → b  

그리고 a,b가 기본키이다.  

먼저, 관계가 1NF을 만족하는지 확인해야 한다. 1NF에서는 모든 속성이 원자적인 값을 가지고 있어야 한다. 주어진 관계에서는 기본키 a, b가 원자적인 값이므로 1NF를 만족한다.  

다음으로, 2NF인지를 확인해 본다. 2NF에서는 주요 속성이 아닌 속성이 전체 기본키에 대해 완전하게 종속되어야 한다. 주어진 함수적 종속성에서 이 조건이 위배되지 않는다.  

이제 3NF인지를 검토한다. 3NF에서는 이행적 종속이 존재하지 않아야 한다. 주어진 함수적 종속성을 살펴보면:  

1. a, c → b, d
2. a, d → b  

이 두 종속성에서 이행적 종속이 없다는 것을 알 수 있다. 즉, 어떤 속성도 다른 속성에 의해 종속되어 있지 않으므로 3NF를 만족한다.  

마지막으로, BCNF인지를 확인한다. BCNF에서는 모든 주요 속성이 후보키에 의해 결정되어야 한다.  

1. a, c → b, d
2. a, d → b  

첫 번째 함수적 종속성에서 a,c는 후보키가 아니기 때문에 BCNF를 만족하지 않는다.  
따라서 주어진 관계가 만족하는 가장 높은 정규형은 3NF이므로 답이 3인 것을 도출할 수 있다.
