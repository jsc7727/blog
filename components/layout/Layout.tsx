import Rain from '@components/animation/Rain';
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
      <Rain></Rain>
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
