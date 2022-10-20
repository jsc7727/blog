import axios from 'axios';
import useSWR from 'swr';

type useGetPostProps = {
  slug: string;
  category: string;
};

const useGetPost = <T>({ category, slug }: useGetPostProps) => {
  const { data, isValidating, error } = useSWR<T, Error>(
    ['post', category, slug],
    async () => {
      try {
        const { data } = await axios.get(`/api/getPost?category=${category}&slug=${slug}`);
        return data;
      } catch (error) {
        return {};
      }
    },
    {
      suspense: false,
    },
  );
  return { data, isValidating, error };
};
export default useGetPost;
