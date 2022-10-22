import { AttributesType } from './frontMatter';
import { getAttributesOfContent } from 'common/frontMatter';
import fs from 'fs';
import path from 'path';

export type FileType = {
  filename: string;
  content: string;
};

export const getFile = (filename: string): FileType => {
  try {
    return { filename, content: fs.readFileSync(`./__posts/${filename}.md`, 'utf-8') };
  } catch (error) {
    return { filename, content: '' };
  }
};

type getAllFilesType = ReturnType<
  (root: string) => { category: string; filename: string; path: string; content: string }[]
>;
/**
 * @param {string} root defalut "./__posts" , string type
 */
export const getAllFiles = (() => {
  const dict: { [x: string]: getAllFilesType } = {};
  return (root = `./__posts`) => {
    if (Object.prototype.hasOwnProperty.call(dict, root)) {
      return dict[root];
    } else {
      return (dict[root] = findPostsRecvFunction(root));
    }
  };
})();

const findPostsRecvFunction = (root = `./__posts`): getAllFilesType => {
  const result: getAllFilesType = [];
  try {
    const files = fs.readdirSync(path.join(process.cwd(), root), 'utf-8');
    for (const filename of files) {
      const idDirectory = fs.lstatSync(root + '/' + filename).isDirectory();
      if (idDirectory === true) {
        result.push(...findPostsRecvFunction(root + '/' + filename));
      } else {
        const category = root.split('/').at(-1);
        if (category !== undefined) {
          result.push({
            category,
            filename,
            path: root + '/' + filename,
            content: fs.readFileSync(path.join(process.cwd(), `${root}/${filename}`), 'utf-8'),
          });
        }
      }
    }
    return result;
  } catch (error) {
    return [];
  }
};

export const getFileBySlug = (slug: string): FileType & { attributes?: AttributesType } => {
  try {
    const res = getAllFiles()
      .map((e) => ({ ...e, attributes: getAttributesOfContent(e.content) }))
      .filter((e) => e.attributes.slug === slug);
    if (res.length === 0) throw 'res zero';
    const { filename, content, attributes } = res[0];
    return { filename, content, attributes };
  } catch (error) {
    return { filename: slug, content: '' };
  }
};
