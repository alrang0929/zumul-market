import { useMutation } from '@tanstack/react-query';
import { saveOrder } from './saveOrder'; 

export const useSaveOrder = () => {
  return useMutation({
    mutationFn: saveOrder, // 저장 함수 지정
    onSuccess: (data) => {
      //console.log('Order saved successfully:', data);
      alert('주문이 성공적으로 저장되었습니다!');
    },
    onError: (error) => {
      console.error('Error saving order:', error);
      alert('주문 저장 중 문제가 발생했습니다. 다시 시도해주세요.');
    },
  });
};
