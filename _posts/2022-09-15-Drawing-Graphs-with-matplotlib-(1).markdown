---
layout : post
title : Drawing Graphs with matplotlib (1)
subtitle : matplotlib과 막대 그래프를 그리는 방법에 대해 알아보자
author : WoojinJeon
categories: Python

tags : [Python, matplotlib, graph, barchart]
---

# 목차
- [목차](#목차)
- [1. matplotlib이란? ](#1-matplotlib이란-)
- [2. 막대 그래프 그리기 ](#2-막대-그래프-그리기-)

# 1. matplotlib이란? <a name = "matplotlib이란?"></a>
Python 프로그래밍 언어 및 수학적 확장 NumPy 라이브러리를 활용한 플로팅 라이브러리<br/>
matplotlib.pyplot 모듈의 각각의 함수를 사용해서 간편하게 그래프를 만들고 변화를 줄 수 있다.<br/>

# 2. 막대 그래프 그리기 <a name = "barplot"></a>

<b>수직 막대 그래프</b>의 경우<br/>

```python
# 라이브러리 가져오기
import matplotlib.pyplot as plt

# 그래프로 그릴 데이터
x = ['Korea', 'England', 'India']
y = [40, 80, 60]

# 그래프 크기 지정
plt.figure(figsize = (7,4))

# barplot
plt.bar(x, y, alpha = 0.7, color = "blue")

# 그래프 제목
plt.title('Score')

# x label, y label
plt.xlabel('country')
plt.ylabel('score')

# 그래프 이미지로 저장
plt.tight_layout() # 여백 조정
plt.savefig('barplot.png') # barplot.png로 저장
```
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/post/barplot.png?raw=true" style="width:100%">

<b>수평 막대 그래프</b>의 경우

```python
import matplotlib.pyplot as plt

# 그래프로 그릴 데이터
x = ['Korea', 'England', 'India']
y = [40, 80, 60]

# 그래프 크기 지정
plt.figure(figsize = (7,4))

# barhplot
plt.barh(x, y, alpha = 0.7, color = "green")

# 그래프 제목
plt.title('Score')

# x label, y label
plt.xlabel('country')
plt.ylabel('score')

# 그래프 이미지로 저장
plt.tight_layout() # 여백 조정
plt.savefig('barhplot.png') # barhplot.png로 저장
```
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/post/barhplot.png?raw=true" style="width:100%">