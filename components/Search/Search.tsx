import { alpha, Box, Card, css, Grow, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useMemo, useState } from 'react';
import useGetPostsBySearchQuery from 'hooks/SWR/useGetPostsBySearchQuery';
import { AttributesType } from '@common/frontMatter';
import { useSWRConfig } from 'swr';
import Portal from '@components/Modal/Portal';
import debounce from 'lodash/debounce';
import Link from 'next/link';
import SearchGrid from './SearchGrid';

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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { mutate } = useSWRConfig();
  const { data: searchList } = useGetPostsBySearchQuery<AttributesType[]>(searchQuery);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeHandler = () => {
    setIsOpen(false);
  };
  const openHandler = () => {
    setIsOpen(true);
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((searchQuery: string) => {
        setSearchQuery(searchQuery);
        mutate(['getPostsBySearchQuery', searchQuery]);
      }, 800),
    [mutate],
  );

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={(e) => debouncedSearch(e.target.value)}
          onFocus={openHandler}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <Portal selector="#portal">
        <>
          {isOpen && (
            <div
              onClick={closeHandler}
              css={css`
                position: fixed;
                top: 64px;
                height: 100%;
                width: 100%;
                backdrop-filter: blur(15px) brightness(25%);
                z-index: 10;
              `}
            >
              <Card sx={{ sx: { margin: '10px' } }}>
                <SearchGrid title={'제목'} category={'카테고리'} date={'날짜'} handler={closeHandler} />
              </Card>
              <Box
                css={css`
                  height: calc(100% - 64px - 72px);
                  overflow-y: scroll;
                  overscroll-behavior: contain;
                `}
              >
                {searchList !== undefined &&
                  Array.isArray(searchList) &&
                  searchList.map((v, idx) => {
                    const rand = Math.random();
                    return (
                      <Link key={v.slug + idx + rand} href={`/post/${v.slug}`}>
                        <Grow in={true} timeout={(idx + 1) * 100}>
                          <Card sx={{ margin: '15px' }}>
                            <SearchGrid title={v.title} category={v.categories[0]} date={v.date} />
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
