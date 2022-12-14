import frontMatter, { FrontMatterResult } from 'front-matter';

export type AttributesType = {
  categories: string[];
  date: string;
  readTime: string;
  description: string;
  slug: string;
  tags: string[];
  title: string;
  thumbnail: string;
  posted: boolean;
};

export const getAttributesOfContent = (contents: string): AttributesType => {
  return frontMatter(contents).attributes as AttributesType;
};

export const getFrontMatterOfContent = (contents: string): FrontMatterResult<AttributesType> => {
  return frontMatter(contents);
};
