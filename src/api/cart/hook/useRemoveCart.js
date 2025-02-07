import { useMutation, useQueryClient } from '@tanstack/react-query';
import supabase from '../../supabaseClient';

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient(); // ✅ 캐시 업데이트를 위한 queryClient

  return useMutation({
    mutationFn: async (itemId) => {
      const { data, error } = await supabase
        .from('cart')
        .update({ delete_state: true })
        .eq('id', itemId)
        .select(); // ✅ 변경된 데이터를 반환받기 위해 select() 추가

      if (error) throw new Error('장바구니 삭제 실패');

      return data;
    },
    onSuccess: (deletedItem, variables) => {
      // ✅ 기존 캐시에서 삭제된 아이템을 제외한 상태로 업데이트
      queryClient.setQueryData(['cart'], (oldCart) => {
        if (!oldCart) return []; // 기존 캐시가 없을 경우 빈 배열 반환
        return oldCart.filter((item) => item.id !== variables); // 삭제된 ID 제거
      });
    },
    onSettled: () => {
      // ✅ 백엔드 데이터 최신화 강제 요청 (보완책)
      queryClient.invalidateQueries(['cart']);
    }
  });
};
