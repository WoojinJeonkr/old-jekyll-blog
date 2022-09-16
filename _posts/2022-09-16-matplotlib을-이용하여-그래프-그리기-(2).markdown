---
layout : post
title : matplotlib을 이용하여 그래프 그리기 (2)
date : 2022-09-16 19:00:21 +09:00
categories : python
comments : false
---

<!--index-->
# 목차
1. &nbsp;[선 그래프](#lineplot)
2. &nbsp;[산점도](#scatterplot)

<br/>

<!--content-->
# 1. 선 그래프 <a name = "lineplot"></a>
수량을 점으로 표시하고 그 점들을 선분으로 이어 그린 그래프를 말한다.<br/>
<li>장점</li>
<ol>
    <li>시간 경과에 따른 연속형 변수의 변동을 보여줄 때 효과적이다</li>
    <li>조사하지 않은 중간의 값도 대략 예측할 수 있다</li>
</ol>
<!--toggle-->
<details>
<summary>matplotlib으로 그리기</summary>
<div markdown="1">

```python
# 라이브러리 가져오기
import matplotlib.pyplot as plt

plt.plot([1, 3, 2, 4]) # 그래프로 그리려는 값 입력
plt.ylabel('some numbers') # y라벨 표시

plt.show()
```
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/img/lineplot.png?raw=true" style="width:100%">
</div>
</details>
<!--toggle-->
<!--줄간격: 0.5-->
<div style="line-height : 50%">
<br>
</div>
<b>선 그래프에 대해 <a href="https://pythonbasics.org/matplotlib-line-chart/" target="_blank" rel="noopener noreferrer">자세히 알아보기</a></b>

<br/>

<!--content-->
# 2. 산점도 <a name = "scatterplot"></a>
2개의 연속형 변수 간의 관계를 보기 위하여 직교 좌표의 평면에 관측점을 찍어 만든 통계 그래프<br/>
데이터 테이블의 각 행은 X축 및 Y축에 설정된 컬럼의 값에 따라 위치가 결정되는 마커로 표시된다<br/>
<li>장점</li>
<ol>
    <li>값 범위가 크게 다른 여러 마커를 비교하려는 경우 Y축에 여러 개의 척도를 사용 가능하다</li>
    <li>추가 정보를 참조선이나 여러 곡선 유형에 표시 가능하다</li>
    <li>특정 범주에 대한 값을 함께 결합하여 범주별로 하나의 마커를 표시하며 각 범주의 항목 수 또는 다른 컬럼을 기준으로 집계된 마커의 크기를 지정할 수 있다</li>
</ol>
<!--toggle-->
<details>
<summary>matplotlib으로 그리기</summary>
<div markdown="2">

```python
# 라이브러리 가져오기
import matplotlib.pyplot as plt
import numpy as np

# scatterplot으로 만들 데이터 생성
data = {'a': np.arange(50),
        'c': np.random.randint(0, 50, 50),
        'd': np.random.randn(50)}
data['b'] = data['a'] + 10 * np.random.randn(50)
data['d'] = np.abs(data['d']) * 100

# 그래프 그리기
plt.scatter('a', 'b', c='c', s='d', data=data)

# 라벨 설정
plt.xlabel('entry a')
plt.ylabel('entry b')

plt.show()
```
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/img/scatterplot.png?raw=true" style="width:100%">
</div>
</details>
<!--toggle-->

<!--줄간격: 0.5-->
<div style="line-height : 50%">
<br>
</div>

<b>산점도에 대해 <a href="https://realpython.com/visualizing-python-plt-scatter/" target="_blank" rel="noopener noreferrer">자세히 알아보기</a></b>