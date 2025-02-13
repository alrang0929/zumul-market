import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchAllProduct } from '../../api/product/fetchAllProduct';

export const useProductsQuery = () => {
  const queryResult = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam = 1 }) => fetchAllProduct(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  console.log("useInfiniteQuery result:", queryResult);

  // totalCount를 첫 번째 페이지에서 가져오기
  const totalCount = queryResult.data?.pages?.[0]?.totalCount ?? 0;

  return { ...queryResult, totalCount }; // totalCount를 반환 객체에 추가
};
