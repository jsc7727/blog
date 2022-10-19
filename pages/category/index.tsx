import type { GetStaticProps, NextPage } from 'next';
import Categories, { CategoryType } from '@components/Categories';
import { getCategories } from '@pages/api/getCategories';

type CategoryMainProps = {
  categories: CategoryType;
};

const CategoryMain: NextPage<CategoryMainProps> = ({ categories }) => {
  return <Categories categories={categories}></Categories>;
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
