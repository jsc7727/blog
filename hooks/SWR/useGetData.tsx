import axios from 'axios';
import useSWR from 'swr';

function useGetData<T>(uri: string) {
  const { data, isValidating, error } = useSWR<T, Error>(
    uri,
    async () => {
      const { data } = await axios.get(uri);
      return data;
    },
    {
      suspense: true,
    },
  );
  return { data, isValidating, error };
}
export default useGetData;
