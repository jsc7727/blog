import { atom, selector } from 'recoil';

export type weatherType = { id: number; main: string; description: string; icon: string };

export const WeatherState = atom<weatherType | null>({
  key: 'keyWeatherState',
  default: null,
});

export const WeatherSelector = selector({
  key: 'keyWeatherSelector',
  get: ({ get }) => get(WeatherState),
  set: ({ set }, newValue) => set(WeatherState, newValue),
});
 