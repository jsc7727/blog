import { AttributesType, getAttributesOfContent } from '@common/frontMatter';
import { getAllFiles } from '@common/fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getAllPostsOfCategory = (category: string) => {
  const files = getAllFiles(`./__posts/${category}`);
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
  const { category } = req.query;
  if (req.method === 'GET' && typeof category === 'string') {
    const postList: AttributesType[] = getAllPostsOfCategory(category);
    res.status(200).send(postList);
  } else {
    res.status(400);
  }
}
