import { Box, css, Stack, useTheme } from '@mui/material';

type LayoutProps = {
  children: React.ReactElement | React.ReactElement[];
};

const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();
  return (
    <Box
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Stack
        maxWidth={1130}
        width={'100%'}
        alignContent="center"
        css={css`
          width: 1130px;
          height: 100%;
          position: fixed;
          margin: 10px;
          border-radius: 15px;
          background-color: ${theme.palette.customRainColor.dark};
          filter: blur(2px);
        `}
      ></Stack>
      <Stack
        maxWidth={1130}
        width={'100%'}
        alignContent="center"
        css={css`
          z-index: 10;
        `}
      >
        {children}
      </Stack>
    </Box>
  );
};
export default Layout;
