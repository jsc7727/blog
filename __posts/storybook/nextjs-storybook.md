---
categories:
  - storybook
date: '2022-11-03'
readTime: '3'
description: 'nextjs 에서 storybook 설치하기'
slug: 'storybook-install-with-nextjs'
tags:
  - storybook
  - nextjs
title: 'nextjs 에서 storybook 설치'
posted: false
---

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
