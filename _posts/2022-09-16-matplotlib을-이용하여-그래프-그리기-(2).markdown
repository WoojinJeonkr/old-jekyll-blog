---
layout : post
title : matplotlib을 이용하여 그래프 그리기 (2)
subtitle : 선 그래프와 산점도는 어떻게 그릴 수 있을까?
author : WoojinJeon
categories: Python

tags : [Python, matplotlib, graph, lineplot, scatterplot]
---

<!--index-->
# 목차
1. &nbsp;[선 그래프](#lineplot)
2. &nbsp;[산점도](#scatterplot)

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
<script src="https://gist.github.com/WoojinJeonkr/49776bfe4dfcc9d14276b20924a480fb.js"></script>
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/post_image/lineplot.png?raw=true" style="width:100%">
</div>
</details>
<!--toggle-->
<!--줄간격: 0.5-->
<div style="line-height : 50%">
<br>
</div>
<b>선 그래프에 대해 <a href="https://pythonbasics.org/matplotlib-line-chart/" target="_blank" rel="noopener noreferrer">자세히 알아보기</a></b>

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
<div markdown="1">
<script src="https://gist.github.com/WoojinJeonkr/84259697b26df0a8745300e83a196cb9.js"></script>
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/post_image/scatterplot.png?raw=true" style="width:100%">
</div>
</details>
<!--toggle-->

<!--줄간격: 0.5-->
<div style="line-height : 50%">
<br>
</div>

<b>산점도에 대해 <a href="https://realpython.com/visualizing-python-plt-scatter/" target="_blank" rel="noopener noreferrer">자세히 알아보기</a></b>