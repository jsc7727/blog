import { PaletteOptions, createTheme, css } from '@mui/material/styles';

export type AllowedTheme = NonNullable<PaletteOptions['mode']>;

export const DEFAULT_THEME: AllowedTheme = 'dark';

export const lightTheme = createTheme({
  palette: {
    primary: { main: '#121212' },
    secondary: { main: '#ffffff' },
    mode: 'light',
  },
  typography: {
    fontFamily: 'Pretendard',
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: '#121212' },
    secondary: { main: '#000000' },
    // text: { primary: '#ff4b22' },
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Pretendard',
  },
});

export const globalStyles = css`
  :root {
    body {
      // 배경 색 전환
      transition: background-color 0.3s ease 0s, color 0.3s ease 0s;
      user-select: none;
      background-color: #fff;
      color: #121212;
    }
  }

  [data-theme='dark'] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`;
