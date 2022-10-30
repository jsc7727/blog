import { GetStaticProps, NextPage } from 'next';
import { getAllTags } from '@pages/api/getAllTags';
import Tags from '@components/Tags';
import layout from '@styles/layout.emotion';
import { Box, Typography } from '@mui/material';
import Layout from '@components/layout/Layout';

const tags: NextPage<{ tags: string[] }> = ({ tags }) => {
  return (
    <Layout>
      <Typography
        p={2}
        variant="h2"
        component="h1"
        sx={{
          fontWeight: '700',
          background: '-webkit-linear-gradient(45deg, #ff4b22 10%, #fcbc19 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {'Tags'}
      </Typography>
      <Tags tags={tags}></Tags>
    </Layout>
  );
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
