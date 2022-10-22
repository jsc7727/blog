import { AttributesType } from '@common/frontMatter';
import { FileType } from '@common/fs';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Time from './Time';
export type PostType = FileType & {
  attributes: AttributesType;
};

const Content = () => {
  const { slug } = useRouter().query;
  const { data: post } = useSWR<PostType>(['post', slug]);
  return (
    <Box p={5} className="post__content">
      <Typography variant="h2" component="h1">
        {post?.attributes?.title}
      </Typography>
      <Time date={post?.attributes.date as string} readTime={post?.attributes.readTime as string}></Time>
      <Box maxWidth={'10'} justifyContent={'center'} dangerouslySetInnerHTML={{ __html: post?.content ?? '' }}></Box>
    </Box>
  );
};

export default Content;
