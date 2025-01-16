import React from 'react';
import SubTitle from '../../../common/SubTitle';
import "./styles/order_info.scss";
import { useFormContext } from 'react-hook-form';
export const OrderInfo = () => {

  const { watch } = useFormContext();
  const totalPrice = watch('totalPrice');
  console.log("totalPrice",totalPrice);
  return (
    <>
    <div className="order-info">
      <SubTitle subTitle={'결제 상세'} />
      {/* 주문내역 */}
      {/* 총 상품 금액 */}
      <div className="price">
      </div>
      {/* 배송비 */}
      {/* 총 결제 금액 */}
    </div>
    </>
  );
};
