import { useEffect, useState } from 'react';
import { Button, css } from '@mui/material';
import { useTheme } from 'next-themes';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const onClickHandler = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return <div></div>;
  return (
    <div
      css={css`
        transition-duration: 1s;
      `}
    >
      {/* <Button
        css={css`
          background: linear-gradient(to top right, #2a48f3 0%, #c32cc2 100%);
          background: linear-gradient(to top right, #f83f15 30%, #f4b109 90%);
          border-radius: 100%;
          & > span {
            margin: 0;
          }
        `}
        variant="contained"
        endIcon={resolvedTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        {resolvedTheme === 'light' ? 'dark' : 'light'}
      </Button> */}
      {resolvedTheme === 'light' ? (
        <DarkModeIcon onClick={onClickHandler} />
      ) : (
        <LightModeIcon onClick={onClickHandler} />
      )}
    </div>
  );
};
export default ThemeToggle;
