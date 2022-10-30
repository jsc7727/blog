import type { GetStaticProps, NextPage } from 'next';
import Categories, { CategoryType } from '@components/Categories';
import { getCategories } from '@pages/api/getCategories';
import Head from 'next/head';
import Layout from '@components/layout/Layout';

type CategoryMainProps = {
  categories: CategoryType;
};

const CategoryMain: NextPage<CategoryMainProps> = ({ categories }) => {
  return (
    <>
      <Head>
        <title>{'카테고리 목록'}</title>
      </Head>
      <Layout>
        <Categories categories={categories}></Categories>
      </Layout>
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
