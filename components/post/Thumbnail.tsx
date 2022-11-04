import { css, SerializedStyles } from '@emotion/react';
import Image from 'next/image';

type ThumbnailTypes = {
  thumbnail?: string;
  width?: number;
  height?: number;
  media?: boolean;
  css?: SerializedStyles;
};
const Thumbnail = ({ thumbnail, width = 1130, height = 500, css: cssProps }: ThumbnailTypes) => {
  return (
    <>
      {thumbnail && (
        <div
          css={css`
            ${cssProps}
            display: flex;
            align-self: center;
            /* min-width: ${width}px;
            min-height: ${height}px; */
          `}
        >
          <Image
            className="thumbnail"
            src={thumbnail}
            alt={thumbnail}
            width={width}
            height={height}
            objectFit="cover"
            css={css`
              border-radius: 10px;
            `}
            priority
          ></Image>
        </div>
      )}
    </>
  );
};
export default Thumbnail;
