---
categories:
  - SWR
date: '2012-04-06'
readTime: '10'
description: stale-while-revalidate 란. 먼저 캐시(스태일)로부터 데이터를 반환한 후, fetch 요청(재검증)을 하고, 최종적으로 최신화된 데이터를 가져오는 전략
slug: stale-while-revalidate
tags:
  - SWR
  - stale-while-revalidate
title: stale-while-revalidate
---

# stale-while-revalidate 란?

## 먼저 캐시(스태일)로부터 데이터를 반환한 후, fetch 요청(재검증)을 하고, 최종적으로 최신화된 데이터를 가져오는 전략

예를 들어 아래 와 같을 경우

```javascript
    Cache-Control: max-age=1, stale-while-revalidate=59
```

1. 이 설정은 시간에 대한 요청이 다음 1초 이내에 반복되는 경우 이전에 캐시된 값이 여전히 최신 상태이며 재검증 없이 그대로 됩니다.

2. 1초에서 60초 사이에 요청이 반복되면 캐시된 값은 유효하지 않지만 API 요청을 이행하는 데 사용됩니다. 동시에 `백그라운드에서` 나중에 사용할 수 있도록 캐시를 새 값으로 채우기 위해 유효성 재확인 요청을 합니다.

3. 요청이 60초 이상 지난 후 반복되면 오래된 응답이 전혀 사용되지 않으며, 브라우저의 요청을 이행하고 캐시 재검증이 모두 네트워크에서 응답을 받아 처리합니다.

다음은 위 글을 표로 정리한 것입니다.

![stale-while-revalidate1](/images/post/stale-while-revalidate1.png)
