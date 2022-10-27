import { useEffect, useState } from 'react';
import { css } from '@mui/material';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from './DarkModeSwitch';

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
        display: flex;
        transition-duration: 1s;
        justify-content: center;
        align-items: center;
      `}
    >
      <DarkModeSwitch
        checked={resolvedTheme === 'dark'}
        moonColor="white"
        sunColor="white"
        onChange={onClickHandler}
        size={35}
      />
    </div>
  );
};
export default ThemeToggle;
