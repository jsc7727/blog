---
categories:
  - Web
date: '2022-10-18'
readTime: '3'
description: sitemap은 사이트에 있는 페이지, 동영상 및 기타 파일과 그 관계에 관한 정보를 제공하는 파일입니다.
slug: sitemap
tags:
  - Web
  - sitemap
  - SEO
title: sitemap 이란?
posted: true
---

# sitemap (구글 기준)

Google과 같은 검색엔진은 이 파일을 읽고 사이트를 더 효율적으로 크롤링합니다.

중요하다고 생각하는 페이지와 파일을 Google에 알리고 중요한 관련 정보를 제공합니다.

# sitemap 이 필요한 이유

사이트 페이지가 제대로 링크되었다면 대개 Google에서 대부분의 사이트를 찾을 수 있습니다.

올바른 연결이란 사이트의 메뉴나 페이지에 배치한 링크와 같이 일부 탐색 형식을 통해 중요하다고 생각하는 모든 페이지에 도달할 수 있다는 것을 의미합니다.

그렇다 하더라도 사이트맵을 사용하면 크고 복잡한 사이트나 전문화된 파일의 크롤링을 개선할 수 있습니다.

ex)

- [페이지가 마지막으로 업데이트된 시간, 페이지의 대체 언어 버전](https://developers.google.com/search/docs/advanced/crawling/localized-versions?hl=ko)

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://~~~/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
      <loc>https://~~~.de/schweiz-deutsch/page.html</loc>
      <xhtml:link
              rel="alternate"
              hreflang="de"
              href="https://~~~.de/deutsch/page.html"/>
      <xhtml:link
              rel="alternate"
              hreflang="en"
              href="https://~~~.com/english/page.html"/>
  </url>
  </urlset>
  ```

- [사이트맵 동영상 항목은 동영상 길이, 등급, 연령 적합성 등급을 지정가능](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps)

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://~~~.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
   <url>
     <loc>http://~~~/videos/some_video_landing_page.html</loc>
     <video:video>
       <video:thumbnail_loc>http://~~~/thumbs/123.jpg</video:thumbnail_loc>
       <video:title>Grilling steaks for summer</video:title>
       <video:description>Alkis shows you how to get perfectly done steaks every
         time</video:description>
       <video:content_loc>
          http://~~~/video123.mp4</video:content_loc>
       <video:player_loc>
         http://~~~/videoplayer.php?video=123</video:player_loc>
       <video:duration>600</video:duration>
       <video:expiration_date>2021-11-05T19:20:30+08:00</video:expiration_date>
       <video:rating>4.2</video:rating>
       <video:view_count>12345</video:view_count>
       <video:publication_date>2007-11-05T19:20:30+08:00</video:publication_date>
       <video:family_friendly>yes</video:family_friendly>
       <video:restriction relationship="allow">IE GB US CA</video:restriction>
       <video:price currency="EUR">1.99</video:price>
       <video:requires_subscription>yes</video:requires_subscription>
       <video:uploader
         info="http://~~~/users/grillymcgrillerson">GrillyMcGrillerson
       </video:uploader>
       <video:live>no</video:live>
     </video:video>
   </url>
  </urlset>
  ```

- [사이트맵 이미지 항목은 페이지에 포함된 이미지의 위치를 포함할 수 있음](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps)

  ```xml
  <url>
  <loc>http://~~~/sample2.html</loc>
  <image:image>
      <image:loc>http://~~~/picture.jpg</image:loc>
  </image:image>
  </url>
  ```

- [사이트맵 뉴스 항목은 기사 제목과 게시 날짜를 포함할 수 있음](https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://~~~/schemas/sitemap/0.9"
        xmlns:news="http://~~~/schemas/sitemap-news/0.9">
  <url>
   <loc>http://~~~/business/article55.html</loc>
   <news:news>
   <news:publication>
     <news:name>The Example Times</news:name>
     <news:language>en</news:language>
   </news:publication>
   <news:publication_date>2008-12-23</news:publication_date>
     <news:title>Companies A, B in Merger Talks</news:title>
    </news:news>
  </url>
</urlset>
```
