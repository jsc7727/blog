import Layout from '@components/layout/Layout';
import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';

const Custom404 = () => {
  //   useEffect(() => {
  //     const func = setTimeout(() => {
  //         const a = test()
  //     }, 3000);
  //     return () => {};
  //   }, []);
  return (
    <Layout>
      <Stack
        direction="row"
        css={css`
          /* padding-top: 300px; */
          height: calc(100vh - 64px);
          text-align: center;
          vertical-align: middle;
          justify-content: center;
          align-items: center;
        `}
      >
        <Typography
          variant="h1"
          css={css`
            animation: glitch 1s linear infinite;
            @keyframes glitch {
              2%,
              64% {
                transform: translate(2px, 0) skew(0deg);
              }
              4%,
              60% {
                transform: translate(-2px, 0) skew(0deg);
              }
              62% {
                transform: translate(0, 0) skew(5deg);
              }
            }

            &:before,
            &:after {
              content: attr(title);
              position: absolute;
              left: 0;
            }

            &:before {
              animation: glitchTop 1s linear infinite;
              clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
              -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
            }

            @keyframes glitchTop {
              2%,
              64% {
                transform: translate(2px, -2px);
              }
              4%,
              60% {
                transform: translate(-2px, 2px);
              }
              62% {
                transform: translate(13px, -1px) skew(-13deg);
              }
            }

            &:after {
              animation: glitchBotom 1.5s linear infinite;
              clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
              -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
            }

            @keyframes glitchBotom {
              2%,
              64% {
                transform: translate(-2px, 0);
              }
              4%,
              60% {
                transform: translate(-2px, 0);
              }
              62% {
                transform: translate(-22px, 5px) skew(21deg);
              }
            }
          `}
        >
          {`404 `}
        </Typography>
        <Typography variant="h1">{` | `}</Typography>
        <Typography variant="h2">{` Page not found.`}</Typography>
      </Stack>
    </Layout>
  );
};
export default Custom404;
