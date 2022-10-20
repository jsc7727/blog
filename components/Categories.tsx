import { Box, Card, CardActionArea, CardContent, Chip, css, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export type CategoryType = { [category: string]: number };

const Categories = ({ categories }: { categories: CategoryType }) => {
  return (
    <Grid container justifyItems="center" spacing={3}>
      {Object.entries(categories).map(([category, count]) => {
        return (
          <Grid key={category} item xs={6} md={3}>
            <Link href={`/category/${category}`}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <Image
                    src={`/images/category/${category}.jpg`}
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
                    <Typography variant="h5" component="div" align="center">
                      {category}
                    </Typography>
                    <Chip label={count} size="small" />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Categories;
