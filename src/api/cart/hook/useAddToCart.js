import { useMutation, useQueryClient } from '@tanstack/react-query';
import supabase from '../../../api/supabaseClient';
export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cartData) => {
      const { data, error } = await supabase
        .from('cart') // 저장할 테이블 이름
        .insert(cartData);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['cart']);
    },
  });
};
