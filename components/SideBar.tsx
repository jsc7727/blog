import { NextPage } from 'next';
import Tags from './Tags';

type SideBarProps = {
  tags?: string[];
};

const SideBar: NextPage<SideBarProps> = ({ tags }) => {
  return <div>{tags && <Tags tags={tags}></Tags>}</div>;
};
export default SideBar;
