import { getAllFiles } from '@common/fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getCategories = () => {
  const categoryDict: { [x: string]: number } = {};
  const files = getAllFiles('./__posts');
  for (const { category } of files) {
    if (category !== undefined) {
      if (Object.prototype.hasOwnProperty.call(categoryDict, category)) categoryDict[category]++;
      else categoryDict[category] = 1;
    }
  }
  return categoryDict;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const categories = getCategories();
    res.status(200).send(categories);
  } else {
    res.status(400);
  }
}
