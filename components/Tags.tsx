import { Chip, css, Stack } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';

type TagsProps = { tags: string[]; component?: 'a' | 'div' };

const Tags: NextPage<TagsProps> = ({ tags, component = 'div' }) => {
  const isComponentA = component === 'a';
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        css={css`
          flex-wrap: wrap;
        `}
      >
        {tags.map((tag) => (
          <Link key={tag} href={`/tag/${tag}`} passHref={!isComponentA} legacyBehavior={!isComponentA}>
            <Chip sx={{ m: 0.5 }} label={tag} clickable />
          </Link>
        ))}
      </Stack>
    </>
  );
};
export default Tags;
