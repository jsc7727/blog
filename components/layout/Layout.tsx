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
        margin: 30px;
      `}
    >
      <Stack
        maxWidth={1130}
        width={'100%'}
        alignContent="center"
        css={css`
          max-width: 1130px;
          width: 100%;
          height: 100%;
          position: fixed;
          border-radius: 15px;
          background: ${theme.palette.customRainColor.dark};
          backdrop-filter: blur(20px);
          overflow: hidden;
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
