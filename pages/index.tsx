import type { GetStaticProps, NextPage } from 'next';
import Categories, { CategoryType } from '@components/Categories';
import { getCategories } from './api/getCategories';
import Tags from '@components/Tags';
import { getAllTags } from './api/getAllTags';
import RecentPosts from '@components/post/RecentPosts';
import { getAllPosts } from '@pages/api/getAllPosts';
import { AttributesType } from '@common/frontMatter';
import { Box, Stack, Typography } from '@mui/material';
import Layout from '@components/layout/Layout';

type HomeProps = {
  tags: string[];
  categories: CategoryType;
  postList: AttributesType[];
};

const Home: NextPage<HomeProps> = ({ tags, categories, postList }) => {
  return (
    <>
      <Layout>
        <Box p={2}>
          <Typography
            p={2}
            variant="h2"
            component="h1"
            sx={{
              fontWeight: '700',
              background: '-webkit-linear-gradient(45deg, #ff4b22  10%, #fcbc19 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {'Category'}
          </Typography>
          <Categories categories={categories}></Categories>
        </Box>
        <Stack sx={{ flexDirection: { xs: 'column', md: 'row-reverse' } }}>
          <Box p={2} sx={{ width: { md: '30%' }, maxHeight: '720px' }}>
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
            <Tags tags={tags} component={'a'}></Tags>
          </Box>
          <Box sx={{ width: { md: '70%' } }}>
            <RecentPosts postList={postList}></RecentPosts>
          </Box>
        </Stack>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const categories = getCategories();
  const tags = getAllTags();
  const postList = getAllPosts().slice(0, 3);

  return {
    props: {
      categories,
      tags,
      postList,
    },
  };
};

export default Home;
