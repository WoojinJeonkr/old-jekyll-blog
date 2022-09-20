---
layout: post
title: Interactive traffic lights
subtitle : 버튼 제어 신호등을 구현해보자
author : WoojinJeon
categories: Arduino

tags : [Arduino]
---

# 📖 목차
1. [구현 목표](#구현목표)
2. [사용 부품](#사용부품)
3. [코드](#코드)
4. [회로 연결 및 작동](#회로연결및작동)

# ⛳️ 구현 목표 <a name="구현목표"></a>
버튼을 누르면 보행자들이 지나갈 수 있도록 신호가 바뀌는 버튼 제어 신호등을 구현한다.

# ⚙️ 사용 부품 <a name="사용부품"></a>

|부품명|개수|
|------|---|
|Arduino UNO R3|&nbsp;&nbsp;&nbsp;1|
|Prototype Shield with Breadboard|&nbsp;&nbsp;&nbsp;1|
|Jumper M/M|&nbsp;&nbsp;13|
|Resistor 220Ω|&nbsp;&nbsp;&nbsp;6|
|Pushbutton|&nbsp;&nbsp;&nbsp;1|
|5MM LED(red)|&nbsp;&nbsp;&nbsp;2|
|5MM LED(green)|&nbsp;&nbsp;&nbsp;2|
|5MM LED(yellow)|&nbsp;&nbsp;&nbsp;1|

# 👨‍💻 코드 <a name="코드"></a>
<script src="https://gist.github.com/WoojinJeonkr/6f737e97ec4c7cff0874e7c7e218b742.js"></script>

# 🖳 회로 연결 및 작동 <a name="회로연결및작동"></a>
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/video/Interactive-traffic-lights.gif?raw=true"/>

처음에 신호등이 초록색인 상태에서 버튼을 누르면 신호등이 초록색 → 노란색 → 빨간색으로 바뀌고 초록색 보행자 신호등이 켜진다.<br/> 초록색 보행자 신호등이 켜진 뒤 시간이 지나면 보행자 신호등이 깜빡이면서 초록색 보행자 신호등이 꺼지고 빨간색 보행자 신호등이 켜지며 신호등은 다시 빨간색 → 노란색 → 초록색으로 돌아온다