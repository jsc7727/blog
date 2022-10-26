---
categories:
  - Web
date: '2022-10-18'
readTime: '3'
description: nextjs에서 sitemap을 적용해보자
slug: nextjs-sitemap
tags:
  - Web
  - sitemap
  - SEO
  - nextjs
title: nextjs에서 sitemap을 적용하기
posted: true
---

# next-sitemap

[🔗](https://www.npmjs.com/package/next-sitemap#installation)

루트 최상위 경로에 next-sitemap.config.js 파일을 생성 후 아래 내용 추가

```javascript
// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
```

package.json 에 추가하기

```javascript
// package.json
{
  "build": "next build",
  "postbuild": "next-sitemap"
}
```

# page/sitemap에 getServerSideProps 사용하여 구현

[🔗](https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps)

```javascript
//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
```

# api로 구현

[🔗](https://vercel.com/guides/how-do-i-generate-a-sitemap-for-my-nextjs-app-on-vercel)

```javascript
// /api/sitemap.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml');

  // Instructing the Vercel edge to cache the file
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      <url>
        <loc>http://www.example.com/foo.html</loc>
        <lastmod>2021-01-01</lastmod>
      </url>
      </urlset>`;

  res.end(xml);
}
```

```javascript
// next.config.js
async rewrites() {
  return [
    {
      source: '/sitemap.xml',
      destination: '/api/sitemap',
    },
  ];
},
```
