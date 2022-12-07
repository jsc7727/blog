/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['http://localhost:3000', '/'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

console.log('NODE_ENV : ', process.env.NODE_ENV);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const runtimeCaching = require('next-pwa/cache');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  runtimeCaching,
  buildExcludes: [/middleware-manifest\.json$/],
  disable: process.env.NODE_ENV === 'development' ? true : false,
  dest: 'public',
  mode: 'production',
});

module.exports = withPWA(nextConfig);

// disable: process.env.NODE_ENV === 'development',
