import React from 'react';
import { Button } from '../../../styles/StyleButton';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';

export const OrderButton = ({ productData }) => {
  const handlePayment = async () => {
    try {
      // Toss Payments 초기화
      const tossPayments = await loadTossPayments(import.meta.env.VITE_TOSS_CLIENT_ID);
      if (!tossPayments) {
        throw new Error('Toss Payments 객체 초기화 실패');
      }

      const orderId = `order-${Date.now()}`; // 고유한 주문 ID 생성
      const totalPrice = productData.reduce((acc, item) => acc + item.totalPrice, 0);

      // 결제 요청
      await tossPayments.requestPayment('카드', {
        amount: totalPrice,
        orderId,
        orderName: productData.map((item) => item.name).join(', '),
        successUrl: `${window.location.origin}/payment-success?orderId=${orderId}`,
        failUrl: `${window.location.origin}/payment-fail`,
      });
    } catch (error) {
      console.error('결제 처리 중 오류 발생:', error);
    }
  };

  return (
    <Button
      buttontype={'rectangleMain'}
      style={{ width: '100%', padding: '1.5rem', marginTop: '2rem' }}
      onClick={handlePayment}
    >
      결제하기
    </Button>
  );
};
