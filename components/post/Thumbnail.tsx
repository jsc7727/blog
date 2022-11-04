import { css } from '@emotion/react';
import Image from 'next/image';

type ThumbnailTypes = {
  thumbnail?: string;
};
const Thumbnail = ({ thumbnail }: ThumbnailTypes) => {
  return (
    <>
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={thumbnail}
          width={1130}
          height={600}
          priority
          css={css`
            width: 100%;
            object-fit: cover;
          `}
        ></Image>
      )}
    </>
  );
};
export default Thumbnail;
