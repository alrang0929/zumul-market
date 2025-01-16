import React from 'react';
import SubTitle from '../../../common/SubTitle';
import { OrderList } from './/OrderList';
import './styles/order_form.scss';
export const OrderForm = ({ product, options }) => {
  
  console.log('options', options);
  return (
    <>
    <div className="order-form-wrap">

      <SubTitle subTitle={'주문 상품'} />
      {/* 주문리스트 */}
      <OrderList product={product} options={options} />
    </div>
    </>
  );
};
