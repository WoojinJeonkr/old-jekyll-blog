---
layout : post
title : Drawing comparative bar graph and overlaying graph
subtitle : 비교막대그래프와 한 곳에 여러 그래프를 그리는 방법에 대해 알아보자
author : WoojinJeon
categories: Python

tags : [Python]
---

# 목차
1. [비교막대그래프](#comparison)
2. [그래프 겹쳐 그리기](#linebar)

<br>

# 1. 비교막대그래프 <a name="comparison"></a>
다음과 같이 데이터가 주어졌을 때 비교막대그래프를 그려보자.
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/post/DataFrame_example.png?raw=true">

<details>
<summary>그래프 그리기</summary>
<div markdown="1">
<script src="https://gist.github.com/WoojinJeonkr/120dd6e3a76f7bc26767a4fdef9b9dd5.js"></script>
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/post/comparison_bar_graph.png?raw=true" style="width:100%">
</div>
</details>

<br>

# 2. 그래프 겹쳐 그리기 <a name="linebar"></a>
위의 데이터를 토대로 막대그래프와 꺾은선그래프를 한 화면에 그려보자.

<details>
<summary>그래프 그리기</summary>
<div markdown="1">
<script src="https://gist.github.com/WoojinJeonkr/939b79cac68b0aa5984d9a308ddec4c9.js"></script>
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/post/line_bar_cross_plot.png?raw=true" style="width:100%">
</div>
</details>