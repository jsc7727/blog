import { getAttributesOfContent } from '@common/frontMatter';
import { getAllFiles } from 'common/fs';
import type { NextApiRequest, NextApiResponse } from 'next';

const getPostsBySearchQuery = (searchQuery: string) => {
  const allFiles = getAllFiles();
  const Regex = new RegExp(`${searchQuery}`, 'i');
  return allFiles
    .map((e) => getAttributesOfContent(e.content))
    .filter((el) => el.posted === true)
    .filter((e) => {
      return e.title.match(Regex) || e.description.match(Regex) || e.slug.match(Regex);
    });
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { searchQuery } = req.query;
  if (req.method === 'GET' && typeof searchQuery === 'string') {
    res.status(200).send(getPostsBySearchQuery(searchQuery));
  } else {
    res.status(400);
  }
}
