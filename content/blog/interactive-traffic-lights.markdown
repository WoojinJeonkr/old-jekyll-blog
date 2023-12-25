---
external: false
title: "interactive traffic lights"
date: 2022-09-05
---

### ⛳️ 구현 목표

버튼을 누르면 보행자들이 지나갈 수 있도록 신호가 바뀌는 버튼 제어 신호등을 구현한다.

### ⚙️ 사용 부품

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

### 👨‍💻 코드

{{ "{% gist WoojinJeonkr/6f737e97ec4c7cff0874e7c7e218b742 " }}%}

### 🖳 회로 연결 및 작동

![traffic lights](https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/video/Interactive-traffic-lights.gif?raw=true)

처음에 신호등이 초록색인 상태에서 버튼을 누르면 신호등이 초록색 → 노란색 → 빨간색으로 바뀌고 초록색 보행자 신호등이 켜진다. 초록색 보행자 신호등이 켜진 뒤 시간이 지나면 보행자 신호등이 깜빡이면서 초록색 보행자 신호등이 꺼지고 빨간색 보행자 신호등이 켜지며 신호등은 다시 빨간색 → 노란색 → 초록색으로 돌아온다.
