import { Box, css, Typography } from '@mui/material';
import { AttributesType } from 'common/frontMatter';
import Link from 'next/link';
import Tags from './Tags';
import Time from './Time';

type PostListProps = {
  title: string;
  postList: AttributesType[];
};

const PostList = ({ title, postList }: PostListProps) => {
  return (
    <Box p={2}>
      <Typography p={2} variant="h2" component="h1">
        {title}
      </Typography>
      {postList.map((e, idx) => {
        return (
          <Link key={idx} href={`/post/${e.slug}`} passHref>
            <Box p={2} mt={2} mb={2} sx={{ border: 1, borderRadius: '15px' }}>
              <Typography variant="h4">{`${e.title}`}</Typography>
              <Time date={e.date} readTime={e.readTime}></Time>
              <Typography
                variant="h6"
                css={css`
                  max-height: 70px;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                `}
              >
                {e.description}
              </Typography>
              <Tags tags={e.tags}></Tags>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};
export default PostList;
