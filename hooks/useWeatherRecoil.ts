import useGps from './useGps';
import useWeather from './useWeather';

const useWeatherRecoil = () => {
  const { coords } = useGps();
  const { weather } = useWeather(coords);
  console.log(weather);
  return {};
};
export default useWeatherRecoil;
