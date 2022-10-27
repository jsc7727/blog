import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllFiles } from 'common/fs';
import { AttributesType } from 'common/frontMatter';
import PostList from '@components/post/PostList';
import { getPostsByCategory } from '@pages/api/getPostsByCategory';
import Head from 'next/head';

type CategoryPageProps = {
  category: string;
  postList: AttributesType[];
};

const CategoryPage: NextPage<CategoryPageProps> = ({ category, postList }) => {
  return (
    <>
      <Head>
        <title>{`'${category}' 카테고리의 글 목록`}</title>
      </Head>
      <PostList title={category} postList={postList}></PostList>
    </>
  );
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
  const postList = getPostsByCategory(category);
  return {
    props: {
      category,
      postList,
    },
    revalidate: 6000,
  };
};
export default CategoryPage;
