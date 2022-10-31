import { css } from '@emotion/react';
import { useTheme } from 'next-themes';
import { memo, useEffect, useMemo, useState } from 'react';
type rainAttributeType = {
  randoFiver: number;
  count: number;
  animationDelay: string;
  animationDuration: string;
};

const RainComp = () => {
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
              left: ${count % 100}%;
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
              `}
            ></div>
            <div
              css={css`
                ${CssProps.splat}
                animation-delay: ${animationDelay}s;
                animation-duration: ${animationDuration}s;
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
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  console.log(resolvedTheme);
  if (mounted === false) return <div></div>;
  return (
    <>
      {' '}
      <RainComp></RainComp>
    </>
  );
};

export default Rain;

const CssProps = {
  rain: css`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  `,

  drop: css`
    position: absolute;
    width: 1px;
    height: 120px;
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
    width: 1px;
    height: 60%;
    margin-left: 7px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
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
    width: 15px;
    height: 10px;
    border-top: 2px dotted rgba(255, 255, 255, 0.5);
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
