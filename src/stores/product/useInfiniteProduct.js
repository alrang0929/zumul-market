import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchAllProduct } from '../../api/product/fetchAllProduct';

export const useProductsQuery = () => {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam = 1 }) => fetchAllProduct(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
