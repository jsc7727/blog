import { NextPage } from 'next';
import Tags from './Tags';

type SideBarProps = {
  tags?: string[];
};

const SideBar: NextPage<SideBarProps> = ({ tags }) => {
  return <Tags tags={tags}></Tags>;
};
export default SideBar;
