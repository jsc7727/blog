import { Chip } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';

type TagsProps = { tags: string[] };

const Tags: NextPage<TagsProps> = ({ tags }) => {
  return (
    <>
      {tags.map((tag: string) => {
        return (
          <Link key={tag} href={`/tag/${tag}`} passHref>
            <Chip key={tag} label={tag} component="a" clickable />
          </Link>
        );
      })}
    </>
  );
};
export default Tags;
