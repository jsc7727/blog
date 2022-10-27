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
posted: false
---

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
