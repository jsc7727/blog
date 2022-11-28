import { WeatherSelector } from '@common/recoil/recoil.atom';
import Cloud from '@components/animation/Cloud';
import Rain from '@components/animation/Rain';
import Snow from '@components/animation/Snow';
import Wave from '@components/animation/Wave';
import useGps from 'hooks/useGps';
import useWeather from 'hooks/useWeather';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Mist from './animation/Mist';

const Weather = () => {
  const { coords } = useGps();
  const { weather } = useWeather(coords);
  const [weatherRecoilState, setWeatherRecoilState] = useRecoilState(WeatherSelector);
  useEffect(() => {
    if (weather !== null) {
      console.log(weather?.list[0]?.weather[0].main);
      setWeatherRecoilState(weather?.list[0]?.weather[0].main);
    }
  }, [setWeatherRecoilState, weather]);
  // const [weatherIdx, setWeatherIdx] = useState(1);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setWeatherIdx((prev) => (prev === 1 ? 0 : 1));
  //   }, 3000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  // const weatherList = [<Rain key={1} />, <Snow key={2} />];
  return (
    <>
      {/* {weatherList[weatherIdx]} */}
      {/* <Rain></Rain> */}
      <Snow></Snow>
      <Wave></Wave>
      {/* <Cloud></Cloud> */}
      {/* <Mist></Mist> */}
    </>
  );
};
export default Weather;
