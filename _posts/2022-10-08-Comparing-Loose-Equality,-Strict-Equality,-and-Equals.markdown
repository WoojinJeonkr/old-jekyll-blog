---
layout : post
title : Comparing Loose Equality, Strict Equality, and Equals
subtitle : ==와 ===, equals의 차이에 대해 알아보자.
categories : TypeScript
tags : [TypeScript]
---

### 1. ==

==은 Equality 연산자로, 연산이 되기 전에 피연산자들을 먼저 비교할 수 있는 형태로 변환시킨다.<br/>
==을 사용하는 경우 사용자가 원하지 않는 강제 형변환이 이루어지는 경우가 있다.<br/>
==은 주소값을 비교하는데 사용되기도 한다.

### 2. ===

===은 Identity 연산자로, 형변환을 하지 않고 연산한다.

```TypeScript
1 == true // true
1 === true // false
```

### 3. equals

equals는 내용 자체를 비교한다.<br/>
==이 주소값을 비교한다면 equals는 주소값이 다르더라도 내용이 같은 경우 참이 된다.

```Java
string a = 'aaa';
string b = a;
string c = new string ('aaa');

system.out.prinln(a == c) // false
system.out.println(a.equals(c)) // true
```

### 4. 정리

- == : value를 비교하는 경우 사용되며 연산 전 피연산자들을 먼저 비교할 수 있는 형태로 변환시키고, 사용자가 원하지 않는 강제 형변환이 이루어질 수 있다.
- === : value와 data type 모두 비교하는 경우 사용되며 형변환을 하지 않고 연산한다.
- equals : 내용 자체를 비교하는 경우 사용되며 주소값이 다르더라도 내용이 같다면 True로 출력된다.

### 5. 참고 자료

- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [JavaScript 동치연산자 ==와 ===의 차이점](https://hyunseob.github.io/2015/07/30/diffrence-between-equality-and-identity-in-javascript/)
- [equals, ==, === 차이점](https://velog.io/@somin_0/equals-%EC%B0%A8%EC%9D%B4%EC%A0%90)