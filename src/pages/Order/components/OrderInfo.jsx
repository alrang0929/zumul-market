import React, { useEffect, useState } from 'react';
import SubTitle from '../../../common/SubTitle';
import './styles/order_info.scss';
import { useFormContext } from 'react-hook-form';
import { addComma } from '../../../utils/commonFn';

export const OrderInfo = () => {
  const { watch } = useFormContext();
  const productData = watch('productData') || [];
  const [localProductData, setLocalProductData] = useState([]);

  useEffect(() => {
    setLocalProductData(productData);
  }, [productData]);

  console.log('productData', productData);

  return (
    <>
      <div className="order-info">
        <SubTitle subTitle={'결제 상세'} />

        <ul>
          {productData.map((item) => (
            <li>
              {/* 주문내역 */}
              <div className="">
                <span>주문 내역</span>
                {item.name}
              </div>
              {/* 주문 금액 */}
              <div className="price">
                <span>상품 금액</span>
                {addComma(item.totalPrice)}
              </div>
              {/* 배송비 */}
              <div className="shipping-fee">
                <span>배송비</span>
                {addComma(item.shippingFee)}
              </div>
            </li>
          ))}
        </ul>

        {/* 총 결제 금액 */}
      </div>
    </>
  );
};
