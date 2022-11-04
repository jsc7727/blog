import { Box, css, Grow, Stack, Typography } from '@mui/material';
import { AttributesType } from 'common/frontMatter';
import Link from 'next/link';
import Tags from '../Tags';
import Thumbnail from './Thumbnail';
import Time from './Time';

type PostListProps = {
  title: string;
  postList: AttributesType[];
};

const PostList = ({ title, postList }: PostListProps) => {
  return (
    <Box p={2}>
      <Typography
        p={2}
        variant="h2"
        component="h1"
        sx={{
          fontWeight: '700',
          background: '-webkit-linear-gradient(45deg, #ff4b22 30%, #fcbc19 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {title}
      </Typography>
      {postList.map((e, idx) => {
        return (
          <Link key={idx} href={`/post/${e.slug}`} passHref legacyBehavior>
            <a>
              <Box
                css={css`
                  &:hover {
                    cursor: pointer;
                    transition-duration: 0.15s;
                    transform: translate(-5px, -3px);
                  }
                `}
              >
                <Grow in={true} timeout={(idx + 1) * 300} unmountOnExit>
                  <Box
                    className="here"
                    p={2}
                    mt={2}
                    mb={2}
                    sx={{
                      border: 1,
                      borderRadius: '15px',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '20px',
                      // justifyContent: 'space-between',
                    }}
                    boxShadow={5}
                  >
                    <Thumbnail width={200} height={150} thumbnail={e.thumbnail} media></Thumbnail>
                    <Box>
                      <Typography variant="h4" component="h2">{`${e.title}`}</Typography>
                      <Time date={e.date} readTime={e.readTime}></Time>
                      <Typography
                        variant="h6"
                        component="h3"
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
                  </Box>
                </Grow>
              </Box>
            </a>
          </Link>
        );
      })}
    </Box>
  );
};
export default PostList;
