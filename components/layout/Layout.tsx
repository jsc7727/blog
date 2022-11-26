import Cloud from '@components/animation/Cloud';
import Rain from '@components/animation/Rain';
import Snow from '@components/animation/Snow';
import { Box, css, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

type LayoutProps = {
  children: React.ReactElement | React.ReactElement[];
};

const Weather = () => {
  const [weatherIdx, setWeatherIdx] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setWeatherIdx((prev) => (prev === 1 ? 0 : 1));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const weatherList = [<Rain key={1} />, <Snow key={2} />];
  return (
    <>
      {/* {weatherList[weatherIdx]} */}
      {/* <Rain></Rain> */}
      <Snow></Snow>
      {/* <Cloud></Cloud> */}
    </>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Weather />
      <Stack
        maxWidth={1130}
        width={'100%'}
        alignContent="center"
        css={css`
          z-index: 10;
        `}
      >
        {children}
      </Stack>
    </Box>
  );
};
export default Layout;
