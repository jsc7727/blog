/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import random from 'lodash/random';
import { useEffect, useMemo, useState } from 'react';

type snowPropsType = {
  isMobile: boolean;
  total?: number;
};

const Snow = ({ isMobile, total = 150 }: snowPropsType) => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  function random_range($min: number, $max: number) {
    const $rand = random();
    const $random_range = $min + Math.floor($rand * ($max - $min + 1));
    return $random_range;
  }

  const snowCssArray: SerializedStyles[] = useMemo(
    () =>
      new Array(total).fill(null).map(() => {
        const $random_x = random(1000000) * 0.0001;
        const $random_offset = random_range(-100000, 100000) * 0.0001;
        const $random_x_end = $random_x + $random_offset;
        const $random_x_end_yoyo = $random_x + $random_offset / 2;
        const $random_yoyo_time = random_range(30000, 80000) / 100000;
        const $random_yoyo_y = $random_yoyo_time * 100;
        const $random_scale = random(10000) * 0.0001;
        const $fall_duration = random_range(10, 30) * 1;
        const $fall_delay = random(30) * -1;
        const $random_opacity = random(10000) * 0.0001;
        return css`
          @keyframes fall {
            #{percentage(${$random_yoyo_time})} {
              transform: translate(${$random_x_end}vw, ${$random_yoyo_y}vw) scale(${$random_scale});
            }
            to {
              transform: translate(${$random_x_end_yoyo}vw, 100vh) scale(${$random_scale});
            }
          }
          opacity: ${$random_opacity};
          transform: translate(${$random_x}vw, -10px) scale(${$random_scale});
          animation: fall ${$fall_duration}s ${$fall_delay}s linear infinite;
        `;
      }),
    [total],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted === false || isMobile === true) return <></>;

  return (
    <div
      css={css`
        overflow: hidden;
        filter: ${`drop-shadow(0 0 10px ${theme.palette.primary.main})`};
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: 1;
        @keyframes in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        animation: in 3s ease-in-out;
      `}
    >
      {snowCssArray.map((snowCss, idx) => {
        return (
          <div
            key={idx}
            css={css`
              ${snowCss}
              width:10px;
              height: 10px;
              background: ${theme.palette.primary.main};
              border-radius: 50%;
            `}
          ></div>
        );
      })}
    </div>
  );
};

export default Snow;
