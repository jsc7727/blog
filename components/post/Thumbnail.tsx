import { css } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';

type ThumbnailTypes = {
  thumbnail?: string;
  width?: number;
  height?: number;
  media?: boolean;
};
const Thumbnail = ({ thumbnail, width = 1130, height = 500, media = false }: ThumbnailTypes) => {
  const cssProps = {
    media: css`
      @media (max-width: 600px) {
        display: none;
      }
    `,
  };
  return (
    <>
      {thumbnail && (
        <Box
          css={css`
            ${media && cssProps.media}
            display: flex;
            align-self: center;
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
        </Box>
      )}
    </>
  );
};
export default Thumbnail;
