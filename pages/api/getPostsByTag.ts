import { AttributesType, getAttributesOfContent } from '@common/frontMatter';
import { getAllFiles } from '@common/fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getPostsByTag = (tag: string) => {
  const files = getAllFiles();
  const postList: AttributesType[] = files
    .map(({ content }) => getAttributesOfContent(content))
    .filter((v) => {
      return v.tags.indexOf(tag) !== -1;
    })
    .sort((a, b) => {
      const left: number = new Date(a.date).getTime();
      const right: number = new Date(b.date).getTime();
      return right - left;
    });
  return postList;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tag } = req.query;
  if (req.method === 'GET' && typeof tag === 'string') {
    const postList: AttributesType[] = getPostsByTag(tag);
    res.status(200).send(postList);
  } else {
    res.status(400);
  }
}
