/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type CloudPropsType = {
  isMobile: boolean;
};

const Cloud = ({ isMobile }: CloudPropsType) => {
  if (isMobile === true) return <></>;
  const cloudList = [
    {
      url: '/images/clouds_1.webp',
      width: '1200px',
      duration: '10s',
    },
    {
      url: '/images/clouds_2.webp',
      width: '1000px',
      duration: '15s',
    },
    {
      url: '/images/clouds_3.webp',
      width: '1579px',
      duration: '17s',
    },
  ];
  return (
    <div
      css={css`
        background(linear-gradient(#333333, #000000));
        z-index:10;
      `}
    >
      <div
        css={css`
        opacity 0.4;
        pointer-events: none;
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
      `}
      >
        {cloudList.map(({ url, width, duration }) => {
          return (
            <div
              key={url}
              css={css`
                background-repeat: repeat-x;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                /* bottom: 0; */
                height: 500px;
                opacity: 0.4;
                background-image: ${`url(${url})`};
                animation: clouds-loop ${duration} infinite linear;

                @keyframes clouds-loop {
                  to {
                    background-position: -${width} 0;
                  }
                }
              `}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Cloud;
