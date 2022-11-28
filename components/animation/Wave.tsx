/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Wave = () => {
  return (
    <div
      css={css`
        height: 5%;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #015871;
        /* background: #e95f34; */

        @keyframes wave {
          0% {
            margin-left: 0;
          }
          100% {
            margin-left: -1600px;
          }
        }
        @keyframes swell {
          0%,
          100% {
            transform: translate3d(0, -25px, 0);
          }
          50% {
            transform: translate3d(0, 5px, 0);
          }
        }
      `}
    >
      <div
        css={css`
          background: url(/images/wave.svg) repeat-x;
          fill: #e95f34;
          position: absolute;
          top: -198px;
          width: 6400px;
          height: 198px;
          animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
          transform: translate3d(0, 0, 0);
        `}
      ></div>
      <div
        css={css`
          background: url(/images/wave.svg) repeat-x;
          fill: #e95f34;
          position: absolute;
          width: 6400px;
          height: 198px;
          animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
          transform: translate3d(0, 0, 0);

          top: -175px;
          animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;
          opacity: 1;
        `}
      ></div>
    </div>
  );
};
export default Wave;
