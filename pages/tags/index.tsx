import { GetStaticProps, NextPage } from 'next';
import { getAllTags } from '@pages/api/getAllTags';
import Tags from '@components/Tags';

const tags: NextPage<{ tags: string[] }> = ({ tags }) => {
  return <Tags tags={tags}></Tags>;
};
export default tags;

export const getStaticProps: GetStaticProps = () => {
  const tags = getAllTags();
  return {
    props: {
      tags,
    },
  };
};
