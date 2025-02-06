import { useQuery } from '@tanstack/react-query';
import { fetchCartItems } from '../fetchCartItems';

export const useFetchCartItem = (userId) => {
  return useQuery({
    queryKey: ['cartItems', userId],
    queryFn: () => fetchCartItems(userId),
    enabled: !!userId, // userId가 있을 때만 데이터 패치
    staleTime: 5 * 60 * 1000, // 5분 동안 데이터 캐싱
    refetchOnWindowFocus: false,
    onError: (error) => {
      console.error('Failed to fetch cart items:', error.message);
    },
  });
};
