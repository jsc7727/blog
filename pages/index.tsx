import type { GetStaticProps, NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Categories, { CategoryType } from '@components/Categories';
import { getCategories } from './api/getCategories';
import Tags from '@components/Tags';
import { getAllTags } from './api/getAllTags';
import RecentPosts from '@components/RecentPosts';
import { getAllPosts } from '@pages/api/getAllPosts';
import { AttributesType } from '@common/frontMatter';
import { Box, Typography } from '@mui/material';

type HomeProps = {
  tags: string[];
  categories: CategoryType;
  postList: AttributesType[];
};

const Home: NextPage<HomeProps> = ({ tags, categories, postList }) => {
  return (
    <div className={styles.container}>
      <Box p={2}>
        <Typography p={2} variant="h2" component="h2">
          {'Category'}
        </Typography>
        <Categories categories={categories}></Categories>
      </Box>
      <Box p={2}>
        <Typography p={2} variant="h2" component="h2">
          {'Tags'}
        </Typography>
        <Tags tags={tags}></Tags>
      </Box>
      <RecentPosts postList={postList}></RecentPosts>
    </div>
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
