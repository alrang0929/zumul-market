import React, { useEffect, useMemo } from 'react';
import { addComma } from '../../../utils/commonFn';
import './styles/order_list.scss';
import { useFormContext } from 'react-hook-form';
import {
  calculateOptionTotal,
  calculateTotalPrice,
  createOptionMap,
} from '../../../utils/orderUtils';
export const OrderList = ({ product, options }) => {
  const { setValue } = useFormContext();
  console.log('product', product);

  // 옵션 데이터를 Map 구조로 변환
  const optionMap = useMemo(() => createOptionMap(options), [options]);

  // 전체 금액 계산
  const totalPrice = useMemo(
    () => calculateTotalPrice(product, optionMap),
    [product, optionMap]
  );

  useEffect(() => {
    setValue('totalPrice', totalPrice);
  }, [totalPrice, setValue]);

  return (
    <ul className="order-list">
      {product.map((item) => {
        const optionTotal = calculateOptionTotal(item.product_id, options);
        const totalPrice = (Number(item.price) || 0) + (Number(optionTotal) || 0) + (Number(item.shipping_fee) || 0);

        return (
          <li key={item.product_id} className="order-item bottom-line">
            {/* 선택박스 */}
            <input type="checkbox" name="" id="" />
            {/* 1. 상품 이미지 */}
            <div className="img-box">
              <img src={item.title_image} alt={`${item.title} 썸네일`} />
            </div>
            {/* 2. 상품 정보 */}
            <div className="product-info">
              <span className="small-fz">{item.category}</span>
              <div className="title">
                <h6>{item.title}</h6>
              </div>
              <div className="price-box">
                <span>상품금액</span>
                <span className="price">{addComma(item.price)}p</span>
              </div>
            </div>
            {/* 3. 옵션 정보 */}
            <ul className="">
              {options.map((option) => (
                <li key={option.product_option_id}>
                  <div className="option-box small-fz flex-column">
                    <span>
                      옵션명: {option.name}({addComma(option.price)})
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            {/* 4. 배송비 */}
            <div className="shipping-fee flex-column ">
              <span>배송비</span>
              <span className="price">{addComma(item.shipping_fee)}p</span>
            </div>
            {/* 5. 전체 금액 */}
            <div className="total-price flex-column">
              <span>총 주문금액</span>
              {console.log('totalPrice', totalPrice)}
              <span className="price">{addComma(totalPrice)}p</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
