import { AttributesType, getAttributesOfContent } from '@common/frontMatter';
import { getAllFiles } from '@common/fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getAllPosts = () => {
  const files = getAllFiles('./__posts');
  const postList: AttributesType[] = files
    .map(({ content }) => getAttributesOfContent(content))
    .sort((a, b) => {
      const left: number = new Date(a.date).getTime();
      const right: number = new Date(b.date).getTime();
      return right - left;
    });
  return postList;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const postList: AttributesType[] = getAllPosts();
    res.status(200).send(postList);
  } else {
    res.status(400);
  }
}
