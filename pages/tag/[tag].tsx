import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { AttributesType } from '@common/frontMatter';
import PostList from '@components/PostList';
import { getPostsByTag } from '@pages/api/getPostsByTag';
import { getAllTags } from '@pages/api/getAllTags';

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
      <PostList title={tag} postList={postList}></PostList>;
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
  console.log('tag', tag, postList.length);
  return {
    props: {
      tag,
      postList,
    },
    // revalidate: 6000,
  };
};
export default TagPage;
