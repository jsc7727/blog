---
categories:
  - storybook
date: '2022-11-03'
readTime: '2'
description: 'storybook 자동 빌드 후 vercel로 배포하기'
slug: 'storybook-vercel-deploy'
tags:
  - storybook
  - vercel
  - deploy
title: 'Storybook vercel deploy'
posted: true
---

# storybook 빌드 및 vercel로 배포하기

![Build & Development Settings](/images/post/storybook-vercel-deploy/storybook-static-delploy.png)

## static 파일 만들기

storybook 빌드로 static 파일을 만든다.

```javascript
yarn build-storybook
```

## OUTPUT DIRECTORY 설정 추가

기본 주소인 `./storybook-static` 파일 경로를 vercel의 `OUTPUT DIRECTORY` 설정에 추가한다.
