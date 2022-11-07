---
categories:
  - Web
date: '2022-11-08'
readTime: '3'
description: noindex와 nofollow의 차이점을 알아보자.
slug: noindex-nofollow
tags:
  - Web
  - sitemap
  - SEO
title: noindex와 nofollow란
thumbnail: '/images/thumbnail/web.png'
posted: true
---

[(google) 색인 생성 및 게재 지시어](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#directives)

## noindex

검색결과에 이 페이지, 미디어 또는 리소스를 표시하지 않습니다.

이 지시어를 지정하지 않으면 페이지, 미디어 또는 리소스가 색인 생성되어 검색결과에 표시될 수 있습니다.

## nofollow

이 페이지의 링크를 따라가지 않습니다.

이 지시어를 지정하지 않으면 Google에서는 페이지의 링크를 사용하여 링크된 페이지를 검색할 수 있습니다.

## 사용법

```html
<!DOCTYPE html>
<html>
  <head>
    // 해당 페이지를 검색 결과에 표시하지 않도록 검색 엔진에 지시함
    <meta name="robots" content="noindex" />
    // 특정 로봇(구글 로봇) 대상 크롤러 지정 차단
    <meta name="googlebot" content="noindex" />
    // 쉼표로 여러개를 구분해서 사용도 가능
    <meta name="robots" content="noindex, nofollow" />
    // 다른 지시어와 함께 사용된 경우 
    // 아래의 경우에서 구글봇은 크롤링할 때, 
    // nofollow와 noindex가 같이 있는것으로 판단합니다.
    <meta name="robots" content="nofollow" />
    <meta name="googlebot" content="noindex" />
    (…)
  </head>
  <body>
    (…)
  </body>
</html>
```
