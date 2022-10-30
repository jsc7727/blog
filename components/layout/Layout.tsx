import { Box, css, Stack } from '@mui/material';

type LayoutProps = {
  children: React.ReactElement | React.ReactElement[];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Stack maxWidth={1130} width={'100%'} alignContent="center">
        {children}
      </Stack>
    </Box>
  );
};
export default Layout;
