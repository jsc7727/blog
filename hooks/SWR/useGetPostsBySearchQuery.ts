import axios from 'axios';
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';

const fetch = async (searchQuery: string) => {
  if (searchQuery === '') return [];
  const { data } = await axios.get(`/api/getPostsBySearchQuery`, { params: { searchQuery } });
  return data;
};

function useGetPostsBySearchQuery<T>(searchQuery: string) {
  const { data, isValidating, error } = useSWRImmutable<T, Error>(
    ['getPostsBySearchQuery', searchQuery],
    async () => await fetch(searchQuery),
  );
  // { revalidateOnMount: false, revalidateIfStale: false, revalidateOnReconnect: false },

  return { data, isValidating, error, fetch };
}
export default useGetPostsBySearchQuery;
