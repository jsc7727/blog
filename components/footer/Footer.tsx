import { Avatar, Box, css, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const CrossBorder = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-content: center;
      `}
    >
      <Box
        sx={{ borderTop: 1 }}
        css={css`
          max-width: 1050px;
          width: calc(100% - 100px);
        `}
      ></Box>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <CrossBorder></CrossBorder>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-content: center;
          width: calc(100% - 100px);
          max-width: 1050px;
          padding: 100px;
          gap: 20px;
          @media (max-width: 600px) {
            flex-direction: column;
            padding: 30px;
            justify-items: center;
            align-self: center;
            align-items: center;
          }
        `}
      >
        <Avatar alt="Remy Sharp" src="/images/profile/cacti.jpg" sx={{ width: 120, height: 120 }} />
        <Box>
          <Typography variant="h3" component="h3">
            JSC
          </Typography>
          <Typography variant="h5" component="h3">
            새로운 기술 익히는게 재밌는 사람 😊
          </Typography>
        </Box>
      </div>
      <CrossBorder></CrossBorder>
    </>
  );
};
export default Footer;
