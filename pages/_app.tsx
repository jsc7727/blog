import { EmotionCache } from '@emotion/react';
import '@common/axios';
import createEmotionCache from '@assets/theme/createEmotionCache';
import PageProvider from '@components/helpers/PageProvider';
import Header from '@components/header/Header';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import { PostType } from '@components/post/Content';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Transition from '@components/animation/Transition';
import { DefaultSeo } from 'next-seo';
import SEO from './../next-seo.config';
import Footer from '@components/footer/Footer';

const clientSideEmotionCache = createEmotionCache();

type fallbackType = PostType;
interface MyAppProps extends AppProps<{ fallback: fallbackType }> {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const router = useRouter();
  return (
    <>
      <div id="portal" />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO}></DefaultSeo>
      <PageProvider emotionCache={emotionCache}>
        <Header></Header>
        <Transition location={router.pathname}>
          <SWRConfig value={{ fallback: pageProps.fallback }}>
            <Component {...pageProps} />
          </SWRConfig>
        </Transition>
      </PageProvider>
    </>
  );
}

export default MyApp;
