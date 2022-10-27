import Grow from '@mui/material/Grow';

type SearchGrowAnimationProps = {
  timeout: number;
  children: React.ReactElement;
};
const SearchGrowAnimation = ({ timeout, children }: SearchGrowAnimationProps) => {
  return (
    <Grow in={true} timeout={timeout}>
      {children}
    </Grow>
  );
};
export default SearchGrowAnimation;
