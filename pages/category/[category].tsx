import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllFiles } from 'common/fs';
import { AttributesType } from 'common/frontMatter';
import PostList from '@components/PostList';
import { getAllPostsOfCategory } from 'pages/api/getAllPostsOfCategory';

type CategoryPageProps = {
  category: string;
  postList: AttributesType[];
};

const CategoryPage: NextPage<CategoryPageProps> = ({ category, postList }) => {
  return <PostList title={category} postList={postList}></PostList>;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllFiles().map(({ category }) => {
    return { params: { category } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const category = context.params?.category as string;
  const postList = getAllPostsOfCategory(category);
  return {
    props: {
      category,
      postList,
    },
    revalidate: 6000,
  };
};
export default CategoryPage;
