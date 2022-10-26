import { alpha, Box, Card, css, Grid, Grow, InputBase, Stack, styled, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useMemo, useState } from 'react';
import useGetPostsBySearchQuery from 'hooks/SWR/useGetPostsBySearchQuery';
import { AttributesType } from '@common/frontMatter';
import useSWR, { useSWRConfig } from 'swr';
import Portal from './Portal';
import axios from 'axios';
import useSWRImmutable from 'swr/immutable';
import { debounce } from 'lodash';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

const SearchComponents = () => {
  const { resolvedTheme, theme } = useTheme();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const { mutate } = useSWRConfig();
  const { data: searchList } = useGetPostsBySearchQuery<AttributesType[]>(searchQuery);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const debouncedSearch = useMemo(
    () =>
      debounce((searchQuery: string) => {
        setSearchQuery(searchQuery);
        mutate(['getPostsBySearchQuery', searchQuery]);
      }, 500),
    [mutate],
  );

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          //   onChange={(e) => setChangeString(e.target.value)}
          onChange={(e) => debouncedSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <Portal selector="#portal">
        <>
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              css={css`
                position: fixed;
                top: 64px;
                height: 100%;
                width: 100%;
                backdrop-filter: blur(15px) brightness(25%);
                z-index: 10;
              `}
            >
              <Box m={5}>
                <Card sx={{ margin: '15px' }}>
                  <Stack
                    direction="row"
                    m={3}
                    gap={3}
                    css={css`
                      &:hover {
                        cursor: pointer;
                      }
                    `}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <Typography>카테고리</Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography>제목</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography>날짜</Typography>
                      </Grid>
                    </Grid>
                  </Stack>
                </Card>
                {searchList !== undefined &&
                  Array.isArray(searchList) &&
                  searchList.map((v, idx) => {
                    const rand = Math.random();
                    return (
                      <Link key={v.slug + idx + rand} href={`/post/${v.slug}`}>
                        <Grow in={true} timeout={(idx + 1) * 100}>
                          <Card sx={{ margin: '15px' }}>
                            <Stack
                              key={v.slug + idx}
                              direction="row"
                              m={3}
                              gap={3}
                              css={css`
                                &:hover {
                                  cursor: pointer;
                                }
                              `}
                            >
                              <Grid container spacing={2}>
                                <Grid item xs={3}>
                                  <Typography>{v.categories}</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                  <Typography>{v.title}</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                  <Typography>{v.date}</Typography>
                                </Grid>
                              </Grid>
                            </Stack>
                          </Card>
                        </Grow>
                      </Link>
                    );
                  })}
              </Box>
            </div>
          )}
        </>
      </Portal>
    </>
  );
};
export default SearchComponents;
