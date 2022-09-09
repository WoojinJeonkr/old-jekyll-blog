---
layout: post
title: Temperature Alarm
categories: arduino
date: 2022-09-09 09:43:09 +09:00
comments: false
---

# 📖 목차
1. [구현 목표](#구현목표)
2. [사용 부품](#사용부품)
3. [코드](#코드)
4. [회로 연결 및 작동](#회로연결및작동)

# ⛳️ 구현 목표 <a name="구현목표"></a>
온도 센서를 이용하여 온도가 일정 범위에 도달하면 버저가 울리도록 구현한다.

# ⚙️ 사용 부품 <a name="사용부품"></a>

|부품명|개수|
|------|---|
|Arduino UNO R3|&nbsp;&nbsp;&nbsp;1|
|Prototype Shield with Breadboard|&nbsp;&nbsp;&nbsp;1|
|Jumper M/M|&nbsp;&nbsp;&nbsp;5|
|Buzzer|&nbsp;&nbsp;&nbsp;1|
|Tem. Sensor|&nbsp;&nbsp;&nbsp;1|

# 👨‍💻 코드 <a name="코드"></a>

```cpp
float sinVal;
int toneVal;
unsigned long tepTimer;

void setup(){
  pinMode(8, OUTPUT); // 부저 핀 정의
  Serial.begin(9600); // 시리얼 통신 속도를 9600bps로 정의
}

void loop(){
  int val; // 온도 센서의 값 저장
  double data; // 온도 값을 변환하여 저장
  val = analogRead(0); // 온도 센서를 아날로그 핀으로 변환하고 값을 읽음
  data = (double)val*(5/10.24); // 전압 값을 온도 값으로 변환
  if (data > 27){ // 만약 온도가 27도보다 높으면 버저가 소리를 냄
    for(int x=0;x<180;x++){
      sinVal = (sin(x*(3.1412/180)));
      toneVal = 2000 + (int(sinVal*1000));
      tone(8, toneVal);
      delay(2);
    }
  } else { // 그렇제 않다면(온도가 27도보다 낮거나 같은 경우)
  	noTone(8); // 버저 끄기
  }
  if(millis() - tepTimer > 50){ // 500ms마다 직렬 포트가 온도 값 출력
  	tepTimer = millis();
    // 'temperature: data값 C'의 형태로 시리얼 모니터에 출력됨
    Serial.print("temperature: ");
    Serial.print(data);
    Serial.println("C");
  }
}
```

# 🖳 회로 연결 및 작동 <a name="회로연결및작동"></a>
<img src="https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/video/Temperature-Alarm.gif?raw=true"/>