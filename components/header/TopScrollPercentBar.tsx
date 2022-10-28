import { css } from '@emotion/react';
import useScrollPercentage from 'hooks/useScrollPercentage';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const TopScrollPercentBar = () => {
  const { isTabnavOn, percentage } = useScrollPercentage();
  const onClickHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {percentage > 0 && (
        <div
          css={css`
            height: 3px;
            width: 100%;
            background: #ff4b22;
            position: fixed;
            top: 64px;
            left: 0;
            &:after {
              content: '';
              position: absolute;
              background: white;
              top: 0;
              bottom: 0;
              left: 0;
              width: 100%;
              transition: transform 330ms ease-in-out;
              transform: translate(${percentage}%);
            }
          `}
        ></div>
      )}
      <ArrowCircleUpIcon
        onClick={onClickHandler}
        css={css`
          cursor: 'pointer';
          background: black;
          border-radius: 100%;
          backdrop-filter: blur(100%) brightness(100%);
          visibility: ${isTabnavOn ? 'visible' : 'hidden'};
          opacity: ${isTabnavOn ? 1 : 0};
          position: fixed;
          width: 50px;
          height: 50px;
          color: #ff4b22;
          right: 10px;
          bottom: 10px;
          transition: opacity 0.5s 0.5s ease-in-out;
          &:hover {
            transition: transform 100ms ease-in-out;
            transform: translate(0, -2px);
          }
        `}
      />
    </>
  );
};
export default TopScrollPercentBar;
