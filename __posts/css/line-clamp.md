---
categories:
  - css
date: '2022-10-20'
readTime: '3'
description: css line-clamp 를 이용한 초과 텍스트 자르기
slug: line-clamp
tags:
  - css
  - line-clamp
  - mdn
title: line-clamp
thumbnail: '/images/thumbnail/css.png'
posted: true
---

# line-clamp 이란?

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)

블록 컨테이너의 내용을 지정된 줄 수로 제한할 수 있습니다.

아래처럼 display 옵션 두개와 같이 사용됩니다.

```css
display: -webkit-box;
display: -webkit-inline-box;
```

대부분 `overflow: hidden`과 `-webkit-line-clamp: ${line};` 같이 쓰입니다.
예를 들어 아래처럼 사용됩니다.

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
```

# 호환성은 어떨까요?

[canius](https://caniuse.com/?search=line-clamp)
![caniuse-line-clamp](/images/post/caniuse-line-clamp.png)

IE, Opera 일부, kaios 에서는 사용이 불가합니다.
