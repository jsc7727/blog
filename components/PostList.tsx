import { Box, css, Fade, Grow, Paper, Typography } from '@mui/material';
import { AttributesType } from 'common/frontMatter';
import Link from 'next/link';
// import Link from '@components/Link';
// import Link from '@mui/material/Link';
import Tags from './Tags';
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
          fontFamily: 'Miwon',
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
              <Grow in={true} timeout={(idx + 1) * 300}>
                <Box
                  p={2}
                  mt={2}
                  mb={2}
                  sx={{ border: 1, borderRadius: '15px' }}
                  css={css`
                    &:hover {
                      cursor: pointer;
                      transition-duration: 0.15s;
                      transform: translate(-5px, -3px);
                    }
                  `}
                  boxShadow={5}
                >
                  {/* <Box component={'a'}></Box> */}
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
              </Grow>
            </a>
          </Link>
        );
      })}
    </Box>
  );
};
export default PostList;
