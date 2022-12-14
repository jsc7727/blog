import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { AttributesType } from '@common/frontMatter';
import PostList from '@components/post/PostList';
import { getPostsByTag } from '@pages/api/getPostsByTag';
import { getAllTags } from '@pages/api/getAllTags';
import Head from 'next/head';
import Layout from '@components/layout/Layout';

type TagPageProps = {
  tag: string;
  postList: AttributesType[];
};

const TagPage: NextPage<TagPageProps> = ({ tag, postList }) => {
  return (
    <>
      <Head>
        <title>{`'${tag}' 태그의 글 목록`}</title>
      </Head>
      <Layout>
        <PostList title={tag} postList={postList}></PostList>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllTags().map((tag) => ({ params: { tag } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const tag = context.params?.tag as string;
  const postList = getPostsByTag(tag);
  return {
    props: {
      tag,
      postList,
    },
    // revalidate: 6000,
  };
};
export default TagPage;
