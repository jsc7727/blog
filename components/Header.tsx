import { AppBar, css, Toolbar } from '@mui/material';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

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
          <ThemeToggle></ThemeToggle>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
export default Header;
