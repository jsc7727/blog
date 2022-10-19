import '../styles/globals.css';
import { css, EmotionCache } from '@emotion/react';
import '@common/axios';
import createEmotionCache from '@assets/theme/createEmotionCache';
import PageProvider from '@components/helpers/PageProvider';
import Header from '@components/Header';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import { PostType } from '@components/Content';

const clientSideEmotionCache = createEmotionCache();

type fallbackType = PostType;
interface MyAppProps extends AppProps<{ fallback: fallbackType }> {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <>
      <PageProvider emotionCache={emotionCache}>
        <Header></Header>
        <SWRConfig value={{ fallback: pageProps.fallback }}>
          <Component {...pageProps} />
        </SWRConfig>
      </PageProvider>
    </>
  );
}

export default MyApp;
