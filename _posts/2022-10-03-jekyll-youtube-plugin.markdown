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
{% youtube "https://www.youtube.com/watch?v=kvHUXPzxTAw" %}
{% endraw %}
```
와 같이 작성한 뒤 실행하면 동영상이 나오게 된다..<br/>
어김없이 build error가 나왔다.. 다음 방법을 사용하자..

## 3. markdown에서 동영상 삽입하기

### 방법 1. 썸네일 이미지를 사용해서 클릭하면 유튜브 페이지로 이동

```md
[![초속 5cm_5cm per second_one more time one more chance .COVER KOREAN](https://img.youtube.com/vi/kvHUXPzxTAw/0.jpg)](https://www.youtube.com/watch?v=kvHUXPzxTAw "초속 5cm_5cm per second_one more time one more chance .COVER KOREAN")
```
와 같이 작성하면 다음과 같은 동영상이 나오게 된다.

[![초속 5cm_5cm per second_one more time one more chance .COVER KOREAN](https://img.youtube.com/vi/kvHUXPzxTAw/0.jpg)](https://www.youtube.com/watch?v=kvHUXPzxTAw "초속 5cm_5cm per second_one more time one more chance .COVER KOREAN")

이제 동영상을 클릭하면 해당 동영상이 기재된 웹페이지로 이동하게 된다.

### 방법 2. 동영상이 기재되어 있는 웹페이지에서 iframe 태그를 사용하여 동영상 출력하기

유튜브를 예로 들어보자면 사용하려는 동영상이 있는 페이지에서 공유 > 퍼가기를 클릭하면 다음과 같은 코드를 얻을 수 있다.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/kvHUXPzxTAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

이제 이 코드를 사용하여 작성하면 다음과 같은 동영상을 출력할 수 있다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kvHUXPzxTAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 4. 참고 자료
- [Jekyll Youtube](https://github.com/dommmel/jekyll-youtube)
- [JEKYLL YAT THEME](https://github.com/jeffreytse/jekyll-theme-yat)
- [stackoverflow - How can I embed a YouTube video on GitHub wiki pages?](https://stackoverflow.com/questions/11804820/how-can-i-embed-a-youtube-video-on-github-wiki-pages)