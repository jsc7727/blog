import { AppBar, css, Stack, Toolbar } from '@mui/material';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Search from '@components/Search';
import useGetPostsBySearchQuery from 'hooks/SWR/useGetPostsBySearchQuery';
import { AttributesType } from '@common/frontMatter';
import useSWR from 'swr';

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          css={css`
            justify-content: space-between;
            opacity: 0.9;
          `}
        >
          <Link href="/">My First Programming</Link>
          <Stack direction="row" spacing={3}>
            <Search></Search>
            <ThemeToggle></ThemeToggle>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
export default Header;
