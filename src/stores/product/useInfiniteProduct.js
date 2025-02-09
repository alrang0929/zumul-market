import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchAllProduct } from '../../api/product/fetchAllProduct';

export const useProductsQuery = () => {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam = 1 }) => fetchAllProduct(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    select: (data) => ({
      pages: data.pages,
      totalCount: data.pages[0]?.totalCount || 0, // 첫 페이지에서 totalCount 가져오기
    }),
  });
};
