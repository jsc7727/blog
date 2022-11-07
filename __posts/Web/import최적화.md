---
categories:
  - Web
date: '2022-10-27'
readTime: '3'
description: import 최적화를 통한 빌드 파일 사이즈 줄이기
slug: import-최적화
tags:
  - Web
title: import 최적화
thumbnail: '/images/thumbnail/web.png'
posted: true
---

# import 방법에 따라 빌드 최적화를 할 수 있습니다.

vscode 확장 프로그램인 [import cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)를 사용하면 더 자세히 알 수 있습니다.

❌

```javascript
import debounce from 'lodash'; // 71.5k (gzipped: 25.2k);
```

✅

```javascript
import debounce from 'lodash/debounce'; // 3.4k (gzipped: 1.5k)
```

# 사이즈가 달라지는 이유가 뭘까요?

cjs와 esm의 차이 때문입니다.

## cjs

```javascript
//importing
const module = require('./module.js');

//exporting
module.exports = function module(n) {...};
```

## esm

```javascript
import {foo, bar} from './module';

...

export default function() {...};
export const function1() {...};
export const function2() {...};
```

lodash는 cjs를 사용하며
esm을 사용해야지만 import를 할 때 [정적 모듈 구조](https://exploringjs.com/es6/ch_modules.html#static-module-structure)로 인해 [tree shaking](https://web.dev/reduce-javascript-payloads-with-tree-shaking/)을 할 수 있습니다.

## 빌드 결과

빌드 결과 nextjs에서 183kb => 160kb로 13% 정도 청크 파일 크기가 감소했습니다.

```javascript
+ First Load JS shared by all                                  183 kB
  ├ chunks/framework-7751730b10fa0f74.js                       45.5 kB
  ├ chunks/main-46d416d9d34a74f5.js                            30.8 kB
  ├ chunks/pages/_app-8914fc410f6c8b01.js                      105 kB
  ├ chunks/webpack-36d12a75f0098f30.js                         1.04 kB
  └ css/9909907984eb4940.css                                   427 B


+ First Load JS shared by all                                  160 kB
  ├ chunks/framework-7751730b10fa0f74.js                       45.5 kB
  ├ chunks/main-46d416d9d34a74f5.js                            30.8 kB
  ├ chunks/pages/_app-da03515c83613b79.js                      81.8 kB
  ├ chunks/webpack-87b3a303122f2f0d.js                         995 B
  └ css/9909907984eb4940.css                                   427 B
```
