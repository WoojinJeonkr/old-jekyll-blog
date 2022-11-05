---
layout : post
title : html react parser
subtitle : What is html-react-parser library?
categories : React
tags : [React, html-react-parser]
---

## 01. html-react-parser란?

HTML을 React 문법인 jsx로 변환해주는 라이브러리이다.

### 1. 설치

#### 01. npm

```Script
npm install html-react-parser --save
```

#### 02. yarn

```Script
yarn add html-react-parser
```

#### 03. CDN

```HTML
<!-- HTMLReactParser depends on React -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/html-react-parser@latest/dist/html-react-parser.min.js"></script>
<script>
  window.HTMLReactParser(/* string */);
</script>
```

### 2. 사용

```TypeScript
const parse = require('html-react-parser');
parse('<p>Hello, World!</p>'); // React.createElement('p', {}, 'Hello, World!')
```

## 02. html-react-parser를 이용한 카드 뒤집기 게임

{% include codepen.html hash = "WNyGvaQ" title = "html-react-parser card game" %}

## 03. Reference

- [html-react-parser - npm](https://www.npmjs.com/package/html-react-parser)
- [Paulina Hetman > Embed pen with React - html react parser](https://codepen.io/pehaa/pen/jOPNRMJ)