---
categories:
  - SWR
date: '2022-10-14'
readTime: '10'
description: server state, client state
slug: state-관리
tags:
  - SWR
  - state-관리
title: state-관리
---

# server state

서버로 부터 불러오는 데이터를 말합니다.

서버 데이터는 항상 최신 상태임을 보장하지 않습니다.

명시적으로 fetching을 수행해야만 최신 데이터로 전환됩니다.

클라이언트가 제어, 소유할 수 없기 때문에 서버로 부터 특정 시점의 데이터를 가져와 저장하여 사용합니다.

때문에 비동기적인 상태를 갖습니다.

ex) react-query나 swr로 캐시 상태를 최적화하여 state를 관리합니다.

# client state

언어, ui 테마, 폼 입력, 사이드바 상태 등과 같이 클라이언트가 제어, 소유하는 데이터를 말합니다.

때문에 동기적인 상태를 갖습니다.

client state는 다시 두 가지로 구분할 수 있습니다.

# local client state

폼 입력, 사이드바 상태 등과 같이 하나 또는 인접한 컴포넌트들에서 이용되는 state입니다.

ex) useState

# global client state

언어, ui 테마 등과 같이 어플리케이션의 여러 곳에서 사용되는 state입니다.

ex) context, redux로 관리합니다.
