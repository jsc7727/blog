import type { GetStaticProps, NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Categories, { CategoryType } from '@components/Categories';
import { getCategories } from './api/getCategories';

type HomeProps = {
  categories: CategoryType;
};

const Home: NextPage<HomeProps> = ({ categories }) => {
  return (
    <div className={styles.container}>
      <Categories categories={categories}></Categories>
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const categories = getCategories();
  return {
    props: {
      categories,
    },
  };
};

export default Home;
