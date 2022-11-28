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

type weatherType = { id: number; main: string; description: string; icon: string };

export const WeatherState = atom<weatherType | null>({
  key: 'keyWeatherState',
  default: null,
});

export const WeatherSelector = selector({
  key: 'keyWeatherSelector',
  get: ({ get }) => get(WeatherState),
  set: ({ set }, newValue) => set(WeatherState, newValue),
});
