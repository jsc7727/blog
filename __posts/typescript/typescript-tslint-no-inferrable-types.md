---
categories:
  - typescript
date: '2022-10-27'
readTime: '2'
description: '@typescript-eslint/no-inferrable-types 오류 해결!'
slug: 'typescript-eslint-no-inferrable-types-에러'
tags:
  - typescript
  - eslint
title: 'typescript-eslint-no-inferrable-types 에러'
thumbnail: '/images/thumbnail/typescript.webp'
posted: true
---

# @typescript-eslint/no-inferrable-types 오류

## 수정 전 코드

```javascript
9:7  Error: Type number trivially inferred from a number literal, remove type annotation.
@typescript-eslint/no-inferrable-types
```

```javascript
9: const TIMEOUT:number = 200;
```

위 코드처럼 타입이 명확할때는 number를 적어주지 않는것이 좋다.

## 수정 후 코드

```javascript
9: const TIMEOUT = 200;
```
