import '../styles/globals.css';
import { css, EmotionCache } from '@emotion/react';
import '@common/axios';
import createEmotionCache from '@assets/theme/createEmotionCache';
import PageProvider from '@components/helpers/PageProvider';
import Header from '@components/Header';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import { PostType } from '@components/Content';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { useRouter } from 'next/router';
import Transition from '@components/Transition';

const clientSideEmotionCache = createEmotionCache();

type fallbackType = PostType;
interface MyAppProps extends AppProps<{ fallback: fallbackType }> {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const router = useRouter();
  return (
    <>
      <Transition location={router.pathname}>
        <div id="portal" />
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <PageProvider emotionCache={emotionCache}>
          <CssBaseline />
          <Header></Header>
          <SWRConfig value={{ fallback: pageProps.fallback }}>
            <Component {...pageProps} />
          </SWRConfig>
        </PageProvider>
      </Transition>
    </>
  );
}

export default MyApp;
