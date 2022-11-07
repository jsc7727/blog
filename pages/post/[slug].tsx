import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllFiles } from 'common/fs';
import { getAttributesOfContent } from 'common/frontMatter';
import Content, { PostType } from '@components/post/Content';
import useSWR, { unstable_serialize } from 'swr';
import { getPost } from 'pages/api/getPost';
import Utterances from '@components/comment/Utterances';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@components/layout/Layout';
import { NextSeo } from 'next-seo';

const PostPage: NextPage = () => {
  const { slug } = useRouter().query;
  const { data: post } = useSWR<PostType>(['post', slug]);
  const url = process.env.NEXT_PUBLIC_URL || 'https://localhost:3000';
  return (
    <>
      <NextSeo
        title={post?.attributes?.title}
        description={post?.attributes?.description}
        openGraph={{
          url: `${url}/${slug}`,
          title: `${post?.attributes?.title}`,
          description: `${post?.attributes?.description}`,
          images: [
            {
              url: `${post?.attributes?.thumbnail}`,
              width: 800,
              height: 600,
              alt: `${post?.attributes?.title}`,
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
        <Content></Content>
        <Utterances></Utterances>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllFiles()
    .map(({ content }) => getAttributesOfContent(content))
    .filter((el) => el.posted === true)
    .map(({ slug }) => ({ params: { slug } }));

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
