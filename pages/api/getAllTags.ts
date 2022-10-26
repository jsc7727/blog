import { getAttributesOfContent } from '@common/frontMatter';
import { getAllFiles } from '@common/fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getAllTags = () => {
  const files = getAllFiles('./__posts');
  const tags: string[][] = files.map(({ content }) => {
    const attributes = getAttributesOfContent(content);
    return attributes.posted === true ? attributes.tags : [];
  });
  const tagsSet = new Set(tags.flat().filter((v) => v !== null));
  const tagsArray = Array.from(tagsSet);
  return tagsArray;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const result = getAllTags();
    res.status(200).send(result);
  } else {
    res.status(400);
  }
}
