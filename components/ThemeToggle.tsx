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

  if (!mounted) return <div></div>;

  return (
    <Button
      css={css`
        background: linear-gradient(to top right, #2a48f3 0%, #c32cc2 100%);
      `}
      variant="contained"
      endIcon={resolvedTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {resolvedTheme === 'light' ? 'dark' : 'light'}
    </Button>
  );
};
export default ThemeToggle;
