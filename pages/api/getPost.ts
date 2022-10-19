import { getFrontMatterOfContent } from '@common/frontMatter';
import { getFileBySlug } from '@common/fs';
import { markdownParser } from '@common/remark';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getPost = async (slug: string) => {
  const file = getFileBySlug(slug);
  const { attributes, body } = getFrontMatterOfContent(file.content);
  const content = await markdownParser(body);
  return { filename: file.filename, attributes, content };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  if (req.method === 'GET' && typeof slug === 'string') {
    const result = await getPost(slug);
    res.status(200).send(result);
  } else {
    res.status(400).send({ error: 'error' });
  }
}
