import { AppBar, css, Stack, Toolbar, Typography } from '@mui/material';
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
          <Link href="/">
            <Typography
              sx={{
                cursor: 'pointer',
                fontFamily: 'Miwon',
                background: '-webkit-linear-gradient(45deg, #ff4b22 30%, #FF8E53 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              css={css`
                animation: typewriter 4s steps(44) 1s 1 normal both, blinkTextCursor 500ms steps(44) infinite normal;

                @keyframes typewriter {
                  from {
                    width: 0;
                  }
                  to {
                    width: 200px;
                  }
                }
                @keyframes blinkTextCursor {
                  from {
                    border-right-color: rgba(255, 255, 255, 0.75);
                  }
                  to {
                    border-right-color: transparent;
                  }
                }
              `}
            >
              {' My First Programming'}
            </Typography>
          </Link>
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
