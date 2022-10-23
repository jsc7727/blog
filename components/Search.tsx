import { alpha, css, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useMemo, useState } from 'react';
import useGetPostsBySearchQuery from 'hooks/SWR/useGetPostsBySearchQuery';
import { AttributesType } from '@common/frontMatter';
import useSWR, { useSWRConfig } from 'swr';
import Portal from './Portal';
import axios from 'axios';
import useSWRImmutable from 'swr/immutable';
import { debounce } from 'lodash';

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
        width: '20ch',
      },
    },
  },
}));

const SearchComponents = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { mutate } = useSWRConfig();
  const { data: searchList, fetch } = useGetPostsBySearchQuery<AttributesType[]>(searchQuery);
  //   const { data: searchList } = useSWR<AttributesType[]>(['getPostsBySearchQuery']);

  const debouncedSearch = useMemo(
    () =>
      debounce((searchQuery: string) => {
        setSearchQuery(searchQuery);
        mutate(['getPostsBySearchQuery', searchQuery], fetch(searchQuery), { revalidate: false });
      }, 500),
    [],
  );

  //   useEffect(() => {
  //     const delayDebounceFn = setTimeout(async () => {
  //       //   mutate(['getPostsBySearchQuery', searchQuery], fetch(searchQuery), { revalidate: false });
  //       setSearchQuery(changeString);
  //     }, 1000);
  //     return () => clearTimeout(delayDebounceFn);
  //   }, [changeString]);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          //   onChange={(e) => setChangeString(e.target.value)}
          onChange={(e) => debouncedSearch(e.target.value)}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      {/* <Portal selector="#portal">
        <div
          css={css`
            background: black;
            width: 1000px;
            height: 1000px;
            position: absolute;
            z-index: 1000; ;
          `}
        >
          <div>
            {searchList !== undefined &&
              Array.isArray(searchList) &&
              searchList.map((v, idx) => {
                return <div key={v.slug + idx}>{v.slug}</div>;
              })}
          </div>
        </div>
      </Portal> */}
    </>
  );
};
export default SearchComponents;
