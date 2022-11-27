/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['http://localhost:3000', '/'],
  },
  content: {
    markdown: {
      rehypePlugins: [['rehype-img-size', { dir: 'public' }]],
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  mode: 'production',
});

module.exports = withPWA(nextConfig);
