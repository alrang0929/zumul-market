import { useQuery } from '@tanstack/react-query';
import { fetchCartItems } from '../cart';

export const useCartItems = (userId) => {
  return useQuery(['cartItems', userId], () => fetchCartItems(userId), {
    enabled: !!userId, // userId가 있을 때만 실행
  });
};

