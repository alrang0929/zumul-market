import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import supabase from '../../../api/supabaseClient';

export const PaymentSuccess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('orderId'); // 결제 성공 시 전달된 orderId

  useEffect(() => {
    const saveOrderData = async () => {
      try {
        const paymentTime = new Date().toISOString();
        const productData = JSON.parse(localStorage.getItem('productData')); // 로컬스토리지에서 데이터 가져옴

        const { data, error } = await supabase
          .from('order')
          .insert(
            productData.map((item) => ({
              id: orderId,
              user_id: 'YOUR_USER_ID', // 실제 사용자 ID로 대체
              created_at: paymentTime,
              status: '결제완료',
              total_price: item.totalPrice,
              shipping_fee: item.shippingFee,
              product_price: item.price,
              payment_metl: '카드', // 결제 수단
              product_id: item.productId,
              option: JSON.stringify(item.options),
              total_quantity: item.options.reduce((acc, option) => acc + option.quantity, 0),
            }))
          );

        if (error) {
          console.error('주문 데이터 저장 실패:', error);
        } else {
          //console.log('주문 데이터 저장 성공:', data);
        }
      } catch (error) {
        console.error('주문 데이터 처리 실패:', error);
      }
    };

    saveOrderData();
  }, []);

  return <p>결제가 성공적으로 완료되었습니다. 감사합니다!</p>;
};
