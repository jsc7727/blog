---
categories:
  - css
date: '2022-10-20'
readTime: '3'
description: emotion css-props 란
slug: emotion-css-props
tags:
  - css-props
  - emotion
title: emotion css-props 가 뭐죠?
thumbnail: '/images/thumbnail/emotion.png'
posted: true
---

## emotion css props란?

[document](https://emotion.sh/docs/css-prop)

`css` prop 는 emotion으로 요소를 작성하는 메인 방법중 하나입니다.

예를들어 아래처럼 style로 작성하는 것이 아닌 엘리먼트에 css 속성을 추가할 수 있습니다.

## css-props는 어떻게 돌아갈까요?

먼저 [리액트](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-different-in-the-new-transform)에서는 jsx파일을 자동으로 컴파일 하는 과정을 보여줍니다.

아래 파일을 컴파일 하게 된다면

```javascript
function App() {
  return <h1>Hello World</h1>;
}
```

아래처럼 변합니다.

```javascript
// Inserted by a compiler (don't import it yourself!)
import { jsx as _jsx } from 'react/jsx-runtime';

function App() {
  return _jsx('h1', { children: 'Hello world' });
}
```

`node_modules\@emotion\react\src\jsx-runtime.js` 파일을 열어보면

property로 css가 있으면 createEmotionProps 함수를 거쳐서 ReactJSXRuntime을 합니다.

```javascript
// @flow
import * as ReactJSXRuntime from 'react/jsx-runtime';
import Emotion, { createEmotionProps } from './emotion-element';
import { hasOwnProperty } from './utils';

export const Fragment = ReactJSXRuntime.Fragment;

export function jsx(type: any, props: any, key: any) {
  if (!hasOwnProperty.call(props, 'css')) {
    return ReactJSXRuntime.jsx(type, props, key);
  }

  return ReactJSXRuntime.jsx(Emotion, createEmotionProps(type, props), key);
}

export function jsxs(type: any, props: any, key: any) {
  if (!hasOwnProperty.call(props, 'css')) {
    return ReactJSXRuntime.jsxs(type, props, key);
  }

  return ReactJSXRuntime.jsxs(Emotion, createEmotionProps(type, props), key);
}
```

그럼 돌아가는 원리를 알았으니 직접 사용해봅시다.

## css props 사용

```javascript
render(
  <div
    css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen',
      },
    }}
  >
    This has a hotpink background.
  </div>,
);
```

react의 경우 `@emotion/react`를 설치하면 css`` 를 이용해 사용 가능합니다.

```javascript
import { css } from '@emotion/react';

const color = 'darkgreen';

render(
  <div
    css={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
    `}
  >
    This has a hotpink background.
  </div>,
);
```

## 변수 사용

아래처럼 변수를 사용할수도 있습니다.

```javascript
import { css } from '@emotion/react';

const base = css`
  color: hotpink;
`;

render(
  <div
    css={css`
      ${base};
      background-color: #eee;
    `}
  >
    This is hotpink.
  </div>,
);
```

## 스타일 우선순위

마지막으로 스타일 우선순위 입니다.

아래처럼 태그가 css-3 > css-2 > css-1 순서대로 감싸여 있을때 결과입니다.

상위 컴포넌트에 연결된 css 속성이 하위 속성을 덮어쓰게 됩니다.

```css
P요소
.css-1 {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  font-family: sans-serif;
  color: black;
}

ArticleText요소
.css-2 {
  font-size: 14px,
  font-family: Georgia, serif,
  color: darkgray;
}

SmallArticleText요소
.css-3 {
  font-size: 10px;
}

결과
.css-result {
+ margin: 0;
- font-size: 12px;
+ line-height: 1.5;
- font-family: 'sans-serif';
- color: black;
- font-size: 14px,
+ font-family: Georgia, serif,
+ color: darkgray;
+ font-size: 10px;
}
```
