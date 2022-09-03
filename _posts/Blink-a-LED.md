---
title: Blinking a LED
categories: arduino
comments: false
---

# 1. Arduino
오픈 소스를 기반으로 한 단일 보드 마이크로컨트롤러로 완성된 보드(상품)와 <br/>관련 개발 도구 및 환경

# 2. 목표
LED가 어떻게 작동하고 회로에서 어떻게 사용될 수 있는지에<br/> 대해 파악한다.

# 3. 사용 부품

|부품명|개수|
|------|---|
|Arduino UNO R3|1|
|Prototype Shield with Breadboard|1|
|Jumper M/M|2|
|Resistor 220Ω|1|
|5MM LED|1|

# 4. 코드

```arduino:Blinking_a_LED.ino

// Project -- Blinking a LED

// 디지털 핀 10에 LED 연결
int ledPin = 10;

void setup()
{
  // 디지털 핀을 출력으로 설정
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  digitalWrite(ledPin, HIGH); // LED on
  delay(1000); // 1초 delay
  digitalWrite(ledPin, LOW); // LED off
  delay(1000); // 1초 delay
}
```
# 5. 회로 연결 및 작동
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/img/Blinking_a_LED.gif?raw=true"/>