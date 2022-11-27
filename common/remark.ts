import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import toc from '@jsdevtools/rehype-toc';

// import rehypeReact from 'rehype-react';
// import rehypeSanitize from 'rehype-sanitize';

export const markdownParser = async (mdText: string) => {
  const res = (
    await unified()
      .use(remarkParse) // 구문 분석
      .use(remarkRehype, { allowDangerousHtml: true }) // html문서로 변환
      .use(rehypeRaw) // raw 파일로 변환
      .use(remarkGfm) // 테이블 관련 추가
      .use(rehypeFormat) // 코드 하이라이트 추가
      .use(rehypeSlug) // slug 추가
      .use(rehypeHighlight) // 하이라이트
      .use(rehypeAutolinkHeadings) // #에 head 링크 추가
      // .use(rehypeSanitize) // 필터링 xss
      .use(toc) // 목차
      .use(rehypeStringify)
      // .use(rehypeReact, {})
      .process(mdText)
  ).toString();

  return res;
};
