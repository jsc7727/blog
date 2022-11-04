---
categories:
  - react-three-fiber
date: '2012-10-16'
readTime: '3'
description: useThree에 대해 알아볼까요?
slug: useThree
tags:
  - react
  - useThree
title: useThree
thumbnail: '/images/thumbnail/react-three-fiber.webp'
posted: true
---

`주의 : useThree hooks는 context로 동작하기에 Canvas 안에서만 사용해야합니다.`

❌ 틀린 사용법

```javascript
import { useThree } from '@react-three/fiber'

function App() {
  const { size } = useThree() // This will just crash
  return (
    <Canvas>
      <mesh>
```

✅ 올바른 사용법

```javascript
function Foo() {
  const { size } = useThree()
  ...
}

function App() {
  return (
    <Canvas>
      <Foo />
```

## useThree

useThree를 사용하면 기본 렌더러, scene, 카메라 등의 상태에 접근 할 수 있습니다.
또한 캔버스 스크린과 뷰포트의 좌표의 현재 사이즈를 제공합니다.

```javascript
import { useThree } from '@react-three/fiber'

function Foo() {
    const state = useThree()
```

useThree는 반응형입니다.
만약 브라우저 창의 크기를 조정하면 새로 측정된 결과를 받으며,
다른 모든 객체(scene, 카메라, ...)에도 동일하게 적용됩니다.

[State 속성](https://docs.pmnd.rs/react-three-fiber/api/hooks#state-properties)

## selector

속성을 선택할 수도 있습니다.

이렇게 하면 특정 항목에만 관심이 있는 구성 요소에 대해 불필요한 재렌더링을 피할 수 있습니다.

`반응성에는 더 깊은 three.js 내부가 포함되지 않습니다!`

```javascript
// 카메라가 교체될 때
const camera = useThree((state) => state.camera);
// viewport가 리사이징 될 때
const viewport = useThree((state) => state.viewport);
// ❌ 깊게 들어가는 것은 불가능
const zoom = useThree((state) => state.camera.zoom);
```

## Reading

```javascript
function Foo() {
  const get = useThree((state) => state.get)
  ...
  get() // Get fresh state from anywhere you want
```

## defaults 값 교환

```javascript
function Foo() {
  const set = useThree((state) => state.set)
  ...
  useEffect(() => {
    set({ camera: new THREE.OrthographicCamera(...) })
  }, [])
```
