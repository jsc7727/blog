import { Box, css, Grid, Grow, Stack, Typography } from '@mui/material';
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
                    transform: translate(-5px, -3px) scale(102%);
                  }
                `}
              >
                <Grow in={true} timeout={(idx + 1) * 300} unmountOnExit>
                  <Stack
                    p={2}
                    mt={2}
                    mb={2}
                    border={1}
                    boxShadow={5}
                    gap={3}
                    css={css`
                      border-radius: 15px;
                      flex-direction: row;
                      @media (max-width: 600px) {
                        flex-direction: column;
                        justify-content: center;
                      }
                    `}
                  >
                    <div
                      css={css`
                        display: flex;
                        width: 200px;
                        height: 150px;
                        min-width: 200px;
                        min-height: 150px;
                        border-radius: 10px;
                        align-self: center;
                        @media (max-width: 600px) {
                          align-content: center;
                          overflow: hidden;
                          width: 100%;
                          height: 180px;
                          max-width: 400px;
                        }
                      `}
                    >
                      <Thumbnail width={600} height={450} thumbnail={e.thumbnail}></Thumbnail>
                    </div>
                    <Stack>
                      <Typography variant="h4" component="h2">{`${e.title}`}</Typography>
                      <Time date={e.date} readTime={e.readTime}></Time>
                      <Typography
                        variant="h6"
                        component="h3"
                        css={css`
                          max-height: 70px;
                          display: -webkit-box;
                          -webkit-box-orient: vertical;
                          -webkit-line-clamp: 1;
                          overflow: hidden;
                        `}
                      >
                        {e.description}
                      </Typography>
                      <Tags tags={e.tags}></Tags>
                    </Stack>
                  </Stack>
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
