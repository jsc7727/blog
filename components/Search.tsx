import { alpha, Box, css, InputBase, styled } from '@mui/material';
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

const StyledBox = styled(Box)(({ theme }) => ({
  // background: `-webkit-linear-gradient(-90deg, #09009f, #00ff95 80%)`,
  font: 'bold 120px Poppins, sans-serif',
  backgroundImage: 'linear-gradient(60deg, #E21143, #FFB03A)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  // display: 'flex',
  // justifyContent: 'center',
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
                backdrop-filter: blur(10px);
                z-index: 10;
              `}
              // css={css`
              //   /* background: rga(#ffffff, 0.5); */
              //   background: black;
              //   width: 100%;
              //   height: 100%;
              //   opacity: 0.8;
              //   position: absolute;
              //   z-index: 1000; ;
              // `}
            >
              <div>
                {searchList !== undefined &&
                  Array.isArray(searchList) &&
                  searchList.map((v, idx) => {
                    return (
                      <StyledBox
                        // sx={{ bgcolor: 'secondary.main' }}
                        key={v.slug + idx}
                        // css={css`
                        //   z-index: 20;
                        //   margin: 50px;
                        //   width: inherit;
                        // `}
                      >
                        {v.slug}
                      </StyledBox>
                    );
                  })}
              </div>
            </div>
          )}
        </>
      </Portal>
    </>
  );
};
export default SearchComponents;
