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
    fontFamily: 'Miwon',
    // textShadow: '2px 2px 2px gray';
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
    fontFamily: 'Miwon',
  },
});

export const globalStyles = css`
  :root {
    body {
      @font-face {
        font-family: Miwon;
        src: url('/fonts/Miwon.woff2');
        format: ('woff2');
        font-display: swap;
      }
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
