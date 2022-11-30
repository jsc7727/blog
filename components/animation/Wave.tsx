/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';

type wavePropsType = {
  isMobile: boolean;
};

const Wave = ({ isMobile }: wavePropsType) => {
  return (
    <div
      css={css`
        height: 5%;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #015871;

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
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3E%3Cstop stop-color='%2357BBC1' stop-opacity='.25' offset='0%25'/%3E%3Cstop stop-color='%23015871' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z' transform='matrix(-1 0 0 1 1600 0)'/%3E%3C/svg%3E%0A")
            repeat-x;
          fill: #e95f34;
          position: absolute;
          top: -198px;
          width: 6400px;
          height: 198px;
          ${isMobile || `animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;`}
        `}
      ></div>
      <div
        css={css`
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3E%3Cstop stop-color='%2357BBC1' stop-opacity='.25' offset='0%25'/%3E%3Cstop stop-color='%23015871' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z' transform='matrix(-1 0 0 1 1600 0)'/%3E%3C/svg%3E%0A")
            repeat-x;
          fill: #e95f34;
          position: absolute;
          width: 6400px;
          height: 198px;
          top: -175px;
          ${isMobile ||
          `animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;`}
          opacity: 1;
        `}
      ></div>
    </div>
  );
};
export default memo(Wave);
