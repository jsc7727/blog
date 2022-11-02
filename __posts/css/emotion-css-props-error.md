---
categories:
  - css
date: '2022-11-03'
readTime: '3'
description: emotion css-props error
slug: emotion-css-props-error
tags:
  - css-props
  - emotion
  - error
title: emotion css-props error
posted: true
---

# 오류 You have tried to stringify object returned from css function.

문제

html 파일을 열어보면 아래와 같은 내용이 적혀있다.
emotion css props를 사용할때 생기는 문제이다.

```text
css="You have tried to stringify object returned from css function. It isn't supposed to be used directly (e.g. as value of the className prop), but rather handed to emotion so it can handle it (e.g. as value of css prop)."
```

해결방법

css를 import 하는 부분 즉 파일 최상단에 `/** @jsxImportSource @emotion/react */` 를 적어준다.

```javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
```

### bable을 사용하는 경우

[🖇️](https://emotion.sh/docs/css-prop#babel-preset)
.babelrc 파일에 아래처럼 코드를 추가해줍니다.

```javascript
{
  "presets": [
    [
      "@babel/preset-react",
      { "runtime": "automatic", "importSource": "@emotion/react" }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

### nextjs인데 babel을 쓰는 경우

```javascript
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

### typescript를 쓰는 경우

`tsconfig.json` ts 설정파일에 `"jsxImportSource": "@emotion/react"`를 아래처럼 추가해줍니다.

```json
{
  "compilerOptions": {
    ...
    "jsxImportSource": "@emotion/react"
  },
}
```
