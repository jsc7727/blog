import { Box, Card, CardActionArea, CardContent, Chip, css, Grid, Grow, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export type CategoryType = { [category: string]: number };

const Categories = ({ categories }: { categories: CategoryType }) => {
  return (
    <Grid
      container
      justifyItems="center"
      spacing={3}
      sx={{ direction: { xs: 'row' }, justifyContent: { xs: 'center', sm: 'flex-start' } }}
    >
      {Object.entries(categories).map(([category, count], idx) => {
        return (
          <Grid key={category} item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ flexBasis: { xs: 'auto' } }}>
            <Link href={`/category/${category}`}>
              <Box
                css={css`
                  &:hover {
                    transition-duration: 0.3s;
                    transform: translate(-5px, -3px);
                  }
                `}
              >
                <Grow in={true} timeout={(idx + 1) * 200}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      ':hover': {
                        boxShadow: 6,
                      },
                    }}
                    elevation={5}
                    css={css`
                      &:hover {
                        transition-duration: 0.3s;
                        transform: translate(-5px, -3px);
                      }
                    `}
                  >
                    <CardActionArea>
                      <Image
                        src={`/images/category/${category}.webp`}
                        alt={category}
                        width={345}
                        height={200}
                        priority
                        css={css`
                          object-fit: cover;
                        `}
                      />
                      <CardContent
                        css={css`
                          display: flex;
                          flex-direction: row;
                          place-content: center;
                          align-items: center;
                          gap: 10px;
                        `}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          align="center"
                          sx={{
                            fontFamily: 'Miwon',
                            background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {category}
                        </Typography>
                        <Chip label={count} size="small" />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Box>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Categories;
