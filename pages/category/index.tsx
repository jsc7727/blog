import type { GetStaticProps, NextPage } from 'next';
import Categories, { CategoryType } from '@components/Categories';
import { getCategories } from '@pages/api/getCategories';
import Head from 'next/head';

type CategoryMainProps = {
  categories: CategoryType;
};

const CategoryMain: NextPage<CategoryMainProps> = ({ categories }) => {
  return (
    <>
      <Head>
        <title>{'카테고리 목록'}</title>
      </Head>
      <Categories categories={categories}></Categories>
    </>
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

export default CategoryMain;
