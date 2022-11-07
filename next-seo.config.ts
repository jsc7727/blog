const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
const SEO = {
  title: 'Study For Programming',
  defaultTitle: 'Study For Programming',
  description: 'IT TECH BLOG BY JUNIOR FRONT DEVELOPER JSC',
  titleTemplate: 'MFP | %s',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#FFFFFF',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_KR',
    url: URL,
    images: [{ url: URL + '/images/MyFP.png' }],
    siteName: 'my-first-programming',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
export default SEO;
