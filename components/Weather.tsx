/** @jsxImportSource @emotion/react */
import { WeatherSelector, weatherType } from '@common/recoil/recoil.atom';
import Cloud from '@components/animation/Cloud';
import Rain from '@components/animation/Rain';
import Snow from '@components/animation/Snow';
import Wave from '@components/animation/Wave';
import { css } from '@emotion/react';
import useGps from 'hooks/useGps';
import useIsMobile from 'hooks/useIsMobile';
import useWeather from 'hooks/useWeather';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRecoilState } from 'recoil';
import Mist from './animation/Mist';
import BookLoading from './Loading/BookLoading';

type WeatherCombinationPropsType = {
  isMobile: boolean;
  weatherRecoilState: weatherType | null;
};

const WeatherCombination = ({ isMobile, weatherRecoilState }: WeatherCombinationPropsType) => {
  if (weatherRecoilState?.main === 'Clouds') {
    return <Cloud isMobile={isMobile}></Cloud>;
  } else if (weatherRecoilState?.main === 'Rain') {
    return <Rain isMobile={isMobile}></Rain>;
  } else if (weatherRecoilState?.main === 'Snow') {
    return <Snow isMobile={isMobile}></Snow>;
  } else if (
    weatherRecoilState?.main === 'Mist' ||
    weatherRecoilState?.main === 'Smoke' ||
    weatherRecoilState?.main === 'Fog'
  ) {
    return <Mist isMobile={isMobile}></Mist>;
  } else {
    return <></>;
  }
};

const Weather = () => {
  const { coords } = useGps();
  const { weather } = useWeather(coords);
  const [weatherRecoilState, setWeatherRecoilState] = useRecoilState(WeatherSelector);
  useEffect(() => {
    if (weather !== null) {
      setWeatherRecoilState(weather?.list[0]?.weather[0]);
    }
  }, [setWeatherRecoilState, weather]);
  const isMobile = useIsMobile();

  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp((prop) => !prop);
  }, [weatherRecoilState?.main]);

  const nodeRef = useRef(null);

  return (
    <>
      <div
        css={css`
          .my-node-enter {
            opacity: 0;
          }
          .my-node-enter-active {
            opacity: 1;
            transition: opacity 1000ms;
          }
          .my-node-exit {
            opacity: 1;
          }
          .my-node-exit-active {
            opacity: 0;
            transition: opacity 1000ms;
          }
        `}
      >
        <CSSTransition nodeRef={nodeRef} in={inProp} timeout={1200} classNames="my-node">
          <div ref={nodeRef}>
            <WeatherCombination isMobile={isMobile} weatherRecoilState={weatherRecoilState} />
          </div>
        </CSSTransition>
      </div>
      <Wave isMobile={isMobile}></Wave>
      {/* <BookLoading></BookLoading> */}
    </>
  );
};
export default Weather;
