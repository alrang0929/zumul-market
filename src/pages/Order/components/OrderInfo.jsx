import React, { useEffect, useState } from 'react';
import SubTitle from '../../../common/SubTitle';
import './styles/order_info.scss';
import { useFormContext } from 'react-hook-form';
import { addComma } from '../../../utils/commonFn';
import { OrderButton } from './OrderButton';

export const OrderInfo = () => {
  const { watch } = useFormContext();
  const productData = watch('productData') || [];
  const [localProductData, setLocalProductData] = useState([]);

  useEffect(() => {
    setLocalProductData(productData);
    localStorage.setItem('productData', JSON.stringify(productData)); 
  }, [productData]);
  //console.log('productData', productData);

  // 상품 가격 + 배송비의 총합 계산
  const totalPayment = productData.reduce((acc, item) => {
    return acc + (item.totalPrice || 0) + (item.shippingFee || 0);
  }, 0);

  useEffect(() => {
    setLocalProductData(productData);
  }, [productData]);

  //console.log('productData', productData);

  return (
    <>
      <div className="order-info">
        <SubTitle subTitle={'결제 상세'} />

        <ul>
          {productData.map((item, idx) => (
            <li key={idx}>
              {/* 주문내역 */}
              <div className="data-wrap flex-between">
                <span>주문 내역</span>
                <span className="fz-bold">{item.name}</span>
              </div>
              {/* 주문 금액 */}
              <div className="price data-wrap flex-between">
                <span>상품 금액</span>
                <span className="fz-bold">{addComma(item.totalPrice)} p</span>
              </div>
              {/* 배송비 */}
              <div className="shipping-fee data-wrap flex-between">
                <span>배송비</span>
                <span className="fz-bold">{addComma(item.shippingFee)} p</span>
              </div>
            </li>
          ))}
          <div className="flex-between total-payment">
            <span>총 결제 금액</span>
            <span>{addComma(totalPayment)} p</span>
          </div>
        </ul>

        {/* 총 결제 금액 */}
        <OrderButton productData={productData}/>
      </div>
    </>
  );
};
