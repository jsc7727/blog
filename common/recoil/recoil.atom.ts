import { atom, selector } from 'recoil';

// example count
// export const countState = atom<any>({
//   key: 'count',
//   default: 0,
// });

// export const incrementCount = selector({
//   key: 'incrementCount',
//   get: ({ get }) => get(countState),
//   set: ({ set }) => set(countState, (currCount) => currCount + 1),
// });

// export const decrementCount = selector({
//   key: 'incrementCount',
//   get: ({ get }) => get(countState),
//   set: ({ set }) => set(countState, (currCount) => currCount + 1),
// });

export const weatherState = atom<string>({
  key: 'weather',
  default: '',
});

export const weatherSelector = selector({
  key: 'weatherState',
  get: ({ get }) => get(weatherState),
  set: ({ set }, newValue) => set(weatherState, newValue),
});
