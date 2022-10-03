---
layout : post
title : jekyll youtube plugin
subtitle : jekyll plugin 중 jekyll-youtube에 대해 알아보자
categories : Skill
tags: [Skill, jekyll, plugin, jekyll-youtube, jekyll-theme-yat]
---

## 1. jekyll-youtube
jekyll-youtube plugin은 Youtube URL을 사용하고 사이트에 비디오를 임베드하기 위해 반응형 html 스니펫을 생성하는 태그를 제공한다.

## 2. jekyll-youtube 설치하기
### 01-1. gemfile에 작성 후 명령어 실행하기

gemfile에 다음과 같이 작성한다.
```
group :jekyll_plugins do
  gem "jekyll-youtube"
end
```

작성을 완료했다면 터미널을 열고 다음 명령어를 작성 후 실행한다. (명령어 작성 후 Enter)

```
bundle
```

### 01-2. 터미널에 직접 설치 명령어 작성하기

터미널을 열고 다음 명령어를 작성 후 실행한다. (명령어 작성 후 Enter)

```
gem install jekyll-youtube
```

### 02. _config.yml 파일에서 plugin 부분에 다음과 같이 추가한다.

```
plugins: [jekyll-youtube]
```

## 3. jekyll-youtube를 사용하여 동영상 사용하기

```md
{% raw %}
{% youtube "https://youtu.be/skuCUdRGA4c" %}
{% endraw %}
```
와 같이 작성한 뒤 실행하면 페이지 소스에는 다음과 같이 표시되며

```md
{% youtube "https://youtu.be/skuCUdRGA4c" %}
```
동영상이 나오게 된다..<br/>
어김없이 build error가 나왔다.. 다음 방법을 사용하자..

## 3. jekyll yat theme에서 동영상 삽입하기

```md
![](//www.youtu.be/kvHUXPzxTAw)
```
와 같이 작성하면 다음과 같은 동영상이 나오게 된다.

![](//www.youtu.be/kvHUXPzxTAw)

jekyll yat theme를 사용하면 jekyll-youtube plugin을 따로 설치하지 않아도 동영상을 삽입하는데 어려움이 없다.


## 4. 참고 자료
- [Jekyll Youtube](https://github.com/dommmel/jekyll-youtube)
- [JEKYLL YAT THEME](https://github.com/jeffreytse/jekyll-theme-yat)