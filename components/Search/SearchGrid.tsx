import { css, Grid, Stack, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Layout from '@components/layout/Layout';

type SearchCardProps = {
  category: string;
  title: string;
  date: string;
  handler?: () => void;
};

const SearchGrid = ({ category, title, date, handler }: SearchCardProps) => {
  return (
    <Stack
      direction="row"
      p={3}
      gap={3}
      css={css`
        &:hover {
          cursor: pointer;
        }
        position: relative;
      `}
    >
      <Grid container spacing={3}>
        <Grid item xs={5} sm={3}>
          <Typography>{category}</Typography>
        </Grid>
        <Grid item xs={7} sm={7}>
          <Typography
            css={css`
              word-break: keep-all;
            `}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={0} sm={2} display={{ xs: 'none', sm: 'block' }}>
          <Typography>{date}</Typography>
        </Grid>
        {handler && (
          <HighlightOffIcon
            css={css`
              right: 20px;
              top: 25px;
              position: absolute;
            `}
            onClick={handler}
          ></HighlightOffIcon>
        )}
      </Grid>
    </Stack>
  );
};
export default SearchGrid;
