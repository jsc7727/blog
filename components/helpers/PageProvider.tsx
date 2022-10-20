import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider as PreferredThemeProvider } from 'next-themes';
import Head from 'next/head';
import { FC } from 'react';
import createEmotionCache from '@assets/theme/createEmotionCache';
import MUIThemeProvider from './MUIThemeProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface PageProviderProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
}

const PageProvider: FC<PageProviderProps> = ({ children, emotionCache = clientSideEmotionCache }) => (
  <PreferredThemeProvider>
    <CacheProvider value={emotionCache}>
      <MUIThemeProvider>{children}</MUIThemeProvider>
    </CacheProvider>
  </PreferredThemeProvider>
);

export default PageProvider;
