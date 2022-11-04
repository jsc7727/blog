import { AttributesType } from '@common/frontMatter';
import { FileType } from '@common/fs';
import { Box, css, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Thumbnail from './Thumbnail';
import Time from './Time';
export type PostType = FileType & {
  attributes: AttributesType;
};

const Content = () => {
  const { slug } = useRouter().query;
  const { data: post } = useSWR<PostType>(['post', slug]);
  return (
    <Box
      p={5}
      className="post__content"
      css={css`
        @media (max-width: 600px) {
          font-size: 0.8rem;
        }
      `}
    >
      <Typography
        variant="h2"
        component="h1"
        css={css`
          @media (max-width: 600px) {
            font-size: 2rem;
          }
        `}
      >
        {post?.attributes?.title}
      </Typography>
      <Time date={post?.attributes.date as string} readTime={post?.attributes.readTime as string}></Time>
      <Thumbnail thumbnail={post?.attributes.thumbnail}></Thumbnail>
      <Box maxWidth={'10'} justifyContent={'center'} dangerouslySetInnerHTML={{ __html: post?.content ?? '' }}></Box>
    </Box>
  );
};

export default Content;
