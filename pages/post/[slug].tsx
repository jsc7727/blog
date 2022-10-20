import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllFiles } from 'common/fs';
import { getAttributesOfContent } from 'common/frontMatter';
import Content from '@components/Content';
import { unstable_serialize } from 'swr';
import { getPost } from 'pages/api/getPost';
import Utterances from '@components/Utterances';

const PostPage: NextPage = () => {
  return (
    <>
      <Content></Content>
      <Utterances></Utterances>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllFiles().map(({ content }) => {
    return { params: { slug: getAttributesOfContent(content)?.slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPost(slug);
  return {
    props: {
      fallback: {
        [unstable_serialize(['post', slug])]: post,
      },
    },
    revalidate: 6000,
  };
};
export default PostPage;
