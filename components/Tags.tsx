import { Chip } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import { getAllTags } from '@pages/api/getAllTags';
import Link from 'next/link';

const Tags: NextPage<{ tags: string[] }> = ({ tags }) => {
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
