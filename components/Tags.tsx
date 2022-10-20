import { Box, Chip, Typography } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';

type TagsProps = { tags: string[] };

const Tags: NextPage<TagsProps> = ({ tags }) => {
  <Typography p={2} variant="h2" component="h2">
    {'tags'}
  </Typography>;
  return (
    <>
      <Box p={2}>
        <Typography p={2} variant="h2" component="h2">
          {'tags'}
        </Typography>
        {tags.map((tag: string) => {
          return (
            <Link key={tag} href={`/tag/${tag}`} passHref>
              <Chip key={tag} label={tag} component="a" clickable />
            </Link>
          );
        })}
      </Box>
    </>
  );
};
export default Tags;
