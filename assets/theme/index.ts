import { PaletteOptions, createTheme, css } from '@mui/material/styles';

export type AllowedTheme = NonNullable<PaletteOptions['mode']>;

export const DEFAULT_THEME: AllowedTheme = 'light';

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
  html,
  body {
    scroll-behavior: smooth;
    // 배경 색 전환
    transition: background-color 0.3s ease 0s, color 0.3s ease 0s;
    user-select: none;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .hljs {
    user-select: text;
    padding: 20px;
    border-top: 1px solid rgb(89, 85, 85);
    border-bottom: 1px solid rgb(124, 116, 116);
    border-radius: 15px;
  }
  .post__content {
    word-break: keep-all;
  }
  .post__content img {
    width: 100%;
  }

  :root {
  }

  [data-theme='light'] {
    body {
      background: #fff;
      color: #121212;
    }
  }

  [data-theme='dark'] {
    body {
      background: #121212;
      color: #fff;
    }
  }
`;
