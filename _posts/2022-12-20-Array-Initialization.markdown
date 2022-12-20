---
layout: post
title: Array Initialization
subtitle: 배열을 초기화하는 4가지 방법
categories: TypeScript
tags: [TypeScript, Array, Initialization]
---

## 01. [] 사용하기

```TypeScript
var A = [1, 2, 3];
var B = A;
A = [];
console.log(A); // []
```

## 02. 배열의 길이를 0으로 만들기

```TypeScript
var A = [1, 2, 3];
A.length = 0;
console.log(A); // []
```

## **03. splice() 사용하기**

```TypeScript
var A = [1, 2, 3];
A.splice(0, A.length);
console.log(A); // []
```

## 04. pop() 사용하기

```TypeScript
var A = [1, 2, 3];
while (A.length > 0){
    A.pop();
};
console.log(A); // []
```
