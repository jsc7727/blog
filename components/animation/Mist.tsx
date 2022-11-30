/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type MistPropsType = {
  isMobile: boolean;
};

const Mist = ({ isMobile }: MistPropsType) => {
  const mistList = [
    '/images/animation/fog1.webp',
    '/images/animation/fog2.webp',
    '/images/animation/fog3.webp',
    '/images/animation/fog4.webp',
    '/images/animation/fog5.webp',
    '/images/animation/fog1.webp',
    '/images/animation/fog2.webp',
    '/images/animation/fog3.webp',
    '/images/animation/fog4.webp',
    '/images/animation/fog5.webp',
  ];
  if (isMobile === true) return <></>;
  return (
    <div
      css={css`
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        transform: rotate(180deg);
        opacity: 0.4;

        @keyframes fog_effect {
          0% {
            opacity: 0;
            transform: scale(1);
          }
          25%,
          75% {
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}
    >
      {mistList.map((url, idx) => {
        return (
          <div
            key={url}
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
              pointer-events: none;
              max-width: 100%;
              background-image: ${`url(${url})`};
              background-size: cover;
              background-position: bottom;
              animation: fog_effect calc(3s * ${idx + 1}) ease-in infinite;
            `}
          ></div>
        );
      })}
    </div>
  );
};
export default Mist;
