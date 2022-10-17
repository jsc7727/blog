import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllFiles } from 'common/fs';
import { getAttributesOfContent } from 'common/frontMatter';
import Content from '@components/Content';
import { unstable_serialize } from 'swr';
import { getPost } from 'pages/api/getPost';

const PostPage: NextPage = () => {
  return <Content></Content>;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllFiles().map(({ category, content }) => {
    return { params: { category, slug: getAttributesOfContent(content)?.slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const category = params?.category as string;
  const post = await getPost(category, slug);
  return {
    props: {
      fallback: {
        [unstable_serialize(['post', category, slug])]: post,
      },
    },
    revalidate: 6000,
  };
};
export default PostPage;
