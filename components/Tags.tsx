import { Box, Chip, css, Stack, Typography } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';

type TagsProps = { tags: string[] };

const Tags: NextPage<TagsProps> = ({ tags }) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        // spacing={1}
        css={css`
          flex-wrap: wrap;
        `}
      >
        {tags.map((tag) => (
          <Link key={tag} href={`/tag/${tag}`} passHref>
            <Chip sx={{ m: 0.5 }} label={tag} component="a" clickable />
          </Link>
        ))}
      </Stack>
    </>
  );
};
export default Tags;
