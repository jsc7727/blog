import { Box, Chip, Stack, Typography } from '@mui/material';
import { AttributesType } from 'common/frontMatter';
import Link from 'next/link';
import Time from './Time';

type PostListProps = {
  category: string;
  postList: AttributesType[];
};

const PostList = ({ category, postList }: PostListProps) => {
  return (
    <Box p={10}>
      <Typography variant="h2" component="h2">
        {category}
      </Typography>
      {postList.map((e, idx) => {
        return (
          <Link key={idx} href={`/${category}/${e.slug}`}>
            <a>
              <Box mt={1} mb={2} p={3} sx={{ border: 1, borderRadius: '15px', margin: '10px' }}>
                <Typography variant="h4">{`${e.title}`}</Typography>
                <Time date={e.date} readTime={e.readTime}></Time>
                <Typography variant="h6">{e.description}</Typography>
                <Stack direction="row" justifyContent="flex-start" spacing={1}>
                  {e.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                  ))}
                </Stack>
              </Box>
            </a>
          </Link>
        );
      })}
    </Box>
  );
};
export default PostList;
