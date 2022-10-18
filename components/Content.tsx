import { AttributesType } from '@common/frontMatter';
import { FileType } from '@common/fs';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Time from './Time';
export type PostType = FileType & {
  attributes: AttributesType;
};

const Content = () => {
  const { category, slug } = useRouter().query;
  const { data: post } = useSWR<PostType>(['post', category, slug]);
  return (
    <Box p={5} className="post__content">
      <Typography variant="h3">{post?.attributes?.title}</Typography>
      <Time date={post?.attributes.date as string} readTime={post?.attributes.readTime as string}></Time>
      <Box maxWidth={'10'} justifyContent={'center'} dangerouslySetInnerHTML={{ __html: post?.content ?? '' }}></Box>
    </Box>
  );
};

export default Content;
