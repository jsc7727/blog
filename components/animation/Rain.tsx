/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Theme, useTheme } from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';
type rainAttributeType = {
  randoFiver: number;
  count: number;
  animationDelay: string;
  animationDuration: string;
};

export const RainComp = ({ theme }: { theme: Theme }) => {
  console.log(theme, theme.palette.primary.main);
  const rainAttributes: rainAttributeType[] = useMemo(() => {
    let count = 0;
    return new Array(30).fill(null).map(() => {
      const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      const randoHundoString = String(randoHundo);
      const animationDelay = '0.' + randoHundoString;
      const animationDuration = '0.5' + randoHundoString;
      const c = (count += randoHundo) % 100;
      return { randoFiver, count: c, animationDelay, animationDuration };
    });
  }, []);

  return (
    <div
      css={css`
        ${CssProps.rain}
      `}
    >
      {rainAttributes.map(({ randoFiver, count, animationDelay, animationDuration }, idx) => {
        return (
          <div
            key={idx}
            css={css`
              ${CssProps.drop};
              left: ${count % 98}%;
              bottom: ${randoFiver + randoFiver - 1 + 100}%;
              animation-delay: ${animationDelay}s;
              animation-duration: ${animationDuration}s;
            `}
          >
            <div
              css={css`
                ${CssProps.stem}
                animation-delay: ${animationDelay}s;
                animation-duration: ${animationDuration}s;
                background: linear-gradient(
                  to bottom,
                  ${theme.palette.secondary.main},
                  ${theme.palette.customRainColor.main}
                );
              `}
            ></div>
            <div
              css={css`
                ${CssProps.splat}
                animation-delay: ${animationDelay}s;
                animation-duration: ${animationDuration}s;
                border-top: 3px dotted ${theme.palette.primary.main};
              `}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

RainComp.displayName = 'RainComp';

const Rain = () => {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted === false) return <div></div>;
  return (
    <>
      <RainComp theme={theme}></RainComp>
    </>
  );
};

export default Rain;

const CssProps = {
  rain: css`
    position: fixed;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,

  drop: css`
    position: absolute;
    width: 1px;
    height: 120px;
    z-index: 0;
    pointer-events: none;
    animation: drop 0.5s linear infinite;

    @keyframes drop {
      0% {
        transform: translateY(0vh);
      }
      75% {
        transform: translateY(90vh);
      }
      100% {
        transform: translateY(90vh);
      }
    }
  `,
  stem: css`
    width: 2px;
    height: 60%;
    z-index: 0;
    margin-left: 7px;
    animation: _stem 0.5s linear infinite;
    @keyframes _stem {
      0% {
        opacity: 1;
      }
      65% {
        opacity: 1;
      }
      75% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }

    animation-delay: 0.6s;
    animation-duration: 0.56s;
  `,

  splat: css`
    z-index: 0;
    width: 15px;
    height: 10px;
    border-radius: 50%;
    opacity: 1;
    transform: scale(0);
    animation-delay: 0.6s;
    animation-duration: 0.56s;
    animation: _splat 0.5s linear infinite;
    @keyframes _splat {
      0% {
        opacity: 1;
        transform: scale(0);
      }
      80% {
        opacity: 1;
        transform: scale(0);
      }
      90% {
        opacity: 0.5;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(1.5);
      }
    }
  `,
};
