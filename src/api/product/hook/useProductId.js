import { useQuery } from '@tanstack/react-query';
import { fetchProductsByIds } from './fetchProductsIds'; 
export const useProductId = (productId) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductsByIds(productId),
    enabled: !!productId, // productId가 있을 때만 실행
  });
};
