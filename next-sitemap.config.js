/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || 'https://my-first-programming.kr',
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
