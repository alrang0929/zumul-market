import React, { useEffect, useMemo } from 'react';
import { addComma } from '../../../utils/commonFn';
import './styles/order_list.scss';
import { useFormContext } from 'react-hook-form';

export const OrderList = ({ product, options }) => {
  const { setValue, getValues } = useFormContext();
  useEffect(() => {
    const productData = product.map((item) => {
      const optionTotal = options
        .flatMap((optionGroup) =>
          optionGroup.filter((option) => option.product_id === item.product_id)
        )
        .reduce(
          (sum, option) => sum + (option.price || 0) * (option.quantity || 0),
          0
        );

      return {
        productId: item.product_id,
        name: item.title,
        price: item.price || 0,
        optionTotal,
        shippingFee: item.shipping_fee || 0,
        totalPrice: (item.price || 0) + optionTotal,
      };
    });
    // 기존 상태와 비교 후 업데이트
    const currentData = getValues('productData');
    if (JSON.stringify(currentData) !== JSON.stringify(productData)) {
      setValue('productData', productData);
    }
  }, [product, options, setValue, getValues]);

  return (
    <ul className="order-list">
      {product.map((item) => {
        const optionTotal = options
          .flatMap(
            (
              optionGroup // 중첩 배열 평탄화 및 필터링
            ) =>
              optionGroup.filter(
                (option) => option.product_id === item.product_id
              )
          )
          .reduce(
            (sum, option) => sum + (option.price || 0) * (option.quantity || 0),
            0
          );

        const totalPrice =
          (item.price || 0) + optionTotal + (item.shipping_fee || 0);

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
                <span className="small-fz">상품금액</span>
                <span className="price">{addComma(item.price)}p</span>
              </div>
            </div>
            {/* 3. 옵션 정보 */}
            <ul className="option-wrap">
              <span className="small-fz">추가 옵션</span>
              {options.flatMap((optionGroup) =>
                optionGroup.map((option) => (
                  <li key={option.product_option_id}>
                    <span>
                      {option.name}(+{addComma(option.price)})
                    </span>
                  </li>
                ))
              )}
            </ul>
            {/* 4. 배송비 */}
            <div className="shipping-fee flex-column ">
              <span className="small-fz">배송비</span>
              <span className="price">{addComma(item.shipping_fee)}p</span>
            </div>
            {/* 5. 전체 금액 */}
            <div className="total-price flex-column">
              <span className="small-fz">주문금액</span>
              <span className="price">{addComma(totalPrice)}p</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
