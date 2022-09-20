---
layout: post
title: Breathing LED
subtitle : PWM으로 RGB LED 페이더를 구현해보자
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
Pulse-width modulation(PWM)을 제어하여 LED가 점차 켜지고 꺼지면서 부드러운 밝기가 출력되는 RGB LED 페이더를 구현한다.

# ⚙️ 사용 부품 <a name="사용부품"></a>

|부품명|개수|
|------|---|
|Arduino UNO R3|&nbsp;&nbsp;&nbsp;1|
|Prototype Shield with Breadboard|&nbsp;&nbsp;&nbsp;1|
|Jumper M/M|&nbsp;&nbsp;&nbsp;2|
|Resistor 220Ω|&nbsp;&nbsp;&nbsp;1|
|5MM LED|&nbsp;&nbsp;&nbsp;1|

# 👨‍💻 코드 <a name="코드"></a>
<script src="https://gist.github.com/WoojinJeonkr/ce7a27fb8815ca80d2f90d051eaace47.js"></script>

# 🖳 회로 연결 및 작동 <a name="회로연결및작동"></a>
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/video/Breathing-LED.gif?raw=true"/>