---
categories:
  - storybook
date: '2022-10-28'
readTime: '3'
description: 'nextjs 에서 storybook 설치하기'
slug: 'storybook-install-with-nextjs'
tags:
  - storybook
  - nextjs
title: 'nextjs 에서 storybook 설치'
posted: false
---

# 3e

# 에러모음

## 70% sealing plugins DocGenPluginDeprecationWarning

`.storybook`의 `main.js` 파일에 아래 줄을 추가

```javascript
module.exports = {
  ...
  typescript: { reactDocgen: 'react-docgen' },
  ...
};
```

## css="You have tried to stringify object returned ~~~

문제

html 파일을 열어보면 아래와 같은 내용이 적혀있다.
emotion css props를 사용할때 생기는 문제이다.

```
css="You have tried to stringify object returned from css function. It isn't supposed to be used directly (e.g. as value of the className prop), but rather handed to emotion so it can handle it (e.g. as value of css prop)."
```

해결방법

css를 import 하는 부분 즉 파일 최상단에 `/** @jsxImportSource @emotion/react */` 를 적어준다.

```javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
```

babel을 사용한다
