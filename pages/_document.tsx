import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '@assets/theme/createEmotionCache';
import Script from 'next/script';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="kr">
        <Head>
          <meta name="description" content="IT TECH BLOG BY JUNIOR FRONT DEVELOPER JSC" />
          {/* PWA primary color */}
          {/* <meta name="theme-color" content={'black'} /> */}

          <link rel="shortcut icon" href="https://my-first-programming.kr/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"
          />

          <link
            rel="stylesheet"
            as="style"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />

          <head dangerouslySetInnerHTML={{ __html: '<!-- BEGIN OPENGRAPH -->' }} />
          <link rel="canonical" href="https://my-first-programming.kr" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://my-first-programming.kr" />
          <meta property="og:site_name" content="Study For Programming" />
          <meta property="og:title" content="Study For Programming" />
          <meta property="og:description" content="IT TECH BLOG BY JUNIOR FRONT DEVELOPER JSC" />
          <meta
            property="og:image"
            content="https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png"
          />
          <meta property="og:article:author" content="jsc7727" />
          <head dangerouslySetInnerHTML={{ __html: '<!-- BEGIN OPENGRAPH -->' }} />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=70970QFS8R" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config','G-C5NHYCZNJK');
              `}
        </Script>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
