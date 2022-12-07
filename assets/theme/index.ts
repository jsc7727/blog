import { createTheme, css } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customRainColor: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    customRainColor?: PaletteOptions['primary'];
  }
}

export const lightTheme = createTheme({
  palette: {
    primary: { main: '#121212' },
    secondary: { main: '#ffffff' },
    customRainColor: {
      main: 'rgb(0,0,0,0.25)',
      dark: 'rgb(255,255,255,0.25)',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: 'Pretendard',
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: '#ffffff' },
    secondary: { main: '#121212' },
    // text: { primary: '#ff4b22' },
    customRainColor: {
      main: 'rgb(255,255,255,0.3)',
      dark: 'rgb(0,0,0,0.3)',
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Pretendard',
  },
});

export const globalStyles = css`
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
    border-radius: 5px;
  }
  .post__content {
    word-break: keep-all;
  }
  .post__content img {
    width: 100%;
  }

  body {
    // 배경 색 전환
    transition: background-color 0.4s ease 0s, color 0.4s ease 0s;
    user-select: none;
    padding: 0;
    margin: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans, Helvetica Neue, sans-serif;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    /* background: linear-gradient(#123 30%, #667); */
  }

  :root {
    scroll-behavior: smooth;
    height: 100%;
    width: 100%;
    *::-webkit-scrollbar {
      cursor: pointer;
      width: 6px;
      height: 10px;
    }

    *::-webkit-scrollbar-thumb {
      background: #ff4b22;
    }

    *::-webkit-scrollbar-track {
      background: gray;
    }
  }

  [data-theme='light'] {
    body {
      /* background: #fff;
      color: #121212; */
    }
  }

  [data-theme='dark'] {
    body {
      /* background: linear-gradient(#123 30%, #667); */
      /* background: #121212; */
      /* background: red; */
      /* color: #fff; */
    }
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'), url('/fonts/Pretendard/woff2/Pretendard-Regular.woff2') format('woff2'),
      url('/fonts/Pretendard/woff2/Pretendard-Regular.woff2') format('woff');
  }
`;
