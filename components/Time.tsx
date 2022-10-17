import { Box, css } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const timeCss = {
  time: css`
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    gap: 10px;
    align-content: center;
  `,
};

const Time = ({ date, readTime }: { date: string; readTime: string }) => {
  return (
    <Box css={timeCss.time}>
      <CalendarTodayOutlinedIcon />
      {date}
      <AccessTimeOutlinedIcon />
      {readTime} 분 소요
    </Box>
  );
};
export default Time;
