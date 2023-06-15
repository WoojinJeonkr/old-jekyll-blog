---
layout : post
title : WS and WAS, scale up and scale out
subtitle : WS와 WAS, scale up과 scale out의 차이에 대해 알아보자
categories : Skill
tags : [Skill, WS, WAS, scale_up, scale_out]
---

## 1. WS와 WAS의 차이
### 01. WS (Web Service)
- 네트워크 상에서 서로 다른 종류의 컴퓨터들 간에 상호작용을 하기 위한 소프트웨어 시스템
- 서비스 지향적 분산 컴퓨팅 기술의 일종
- 프로토콜 스택 : SOAP, WSDL, UDDI 등
- 모든 메시징에 XML이 사용되어 상호운용성이 높음

### 02. WAS (Web Application Service)
- 웹 애플리케이션과 서버 환경을 만들어 동작시키는 기능을 제공하는 소프트웨어 프레임워크
- 인터넷 상에서 HTTP를 통해 사용자 컴퓨터, 장치에 애플리케이션을 수행해 주는 미들웨어(소프트웨어 엔진)
- 서버는 동적 서버 콘텐츠 수행하며, 주로 데이터베이스 서버와 같이 수행
- 기능
  1. 프로그램 실행 환경과 데이터베이스 접속 기능 제공
  2. 여러 개의 트랜잭션 관리
  3. 업무를 처리하는 비즈니스 로직 수행

## 2. scale up과 scale out의 차이
### 01. 두 방법의 공통점과 차이점
- 공통점 : 시스템의 처리 능력과 저장 용량 모두 증가
- 차이점 : 엔지니어가 이러한 유형의 성장 및 시스템 개선을 달성하는 방법의 차이

### 02. scale up
- 리소스를 통합하여 기존 장치 구축
- 수직으로 건물을 확대할 것인가?

### 03. scale out
- 시스템에 더 많은 개별 장치 추가
- 수평으로 건물을 확대할 것인가?

<br>

![scale up vs scale out](https://github.com/WoojinJeonkr/WoojinJeonkr.github.io/blob/main/assets/images/post/scale_up_out.png?raw=true)
*https://tecoble.techcourse.co.kr/post/2021-10-12-scale-up-scale-out/*

## 3. 참고 자료
- [Web service](https://en.wikipedia.org/wiki/Web_service)
- [Application server](https://en.wikipedia.org/wiki/Application_server)
- [Scale-up과 Scale-out에 대해 알아보자!](https://tecoble.techcourse.co.kr/post/2021-10-12-scale-up-scale-out/)