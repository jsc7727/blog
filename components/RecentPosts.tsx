import { AttributesType } from '@common/frontMatter';
import { NextPage } from 'next';
import PostList from './PostList';

const RecentPosts: NextPage<{ postList: AttributesType[] }> = ({ postList }) => {
  return <PostList title={'Recent Posts'} postList={postList}></PostList>;
};
export default RecentPosts;
